const { createConnection } = require('../database/database.js');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../config/jwt');

async function registerUser(password, email, nombre, apellido, direccion, telefono) {
    const connection = createConnection();
    const saltRounds = 5;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const usuarioQuery = 'INSERT INTO Usuarios (nombre, apellido, direccion, telefono) VALUES (?, ?, ?, ?)';
        const cuentaQuery = 'INSERT INTO Cuentas (usuario_id, email, contraseña) VALUES (?, ?, ?)';

        await new Promise((resolve, reject) => {
            connection.beginTransaction((err) => {
                if (err) {
                    return reject(new Error('Error al iniciar la transacción'));
                }
                resolve();
            });
        });

        const usuarioResult = await new Promise((resolve, reject) => {
            connection.query(usuarioQuery, [nombre, apellido, direccion, telefono], (err, result) => {
                if (err) return reject(new Error('Error al insertar el usuario: ' + err.message));
                resolve(result);
            });
        });

        const usuario_id = usuarioResult.insertId;

        await new Promise((resolve, reject) => {
            connection.query(cuentaQuery, [usuario_id, email, hashedPassword], (err, result) => {
                if (err) return reject(new Error('Error al insertar la cuenta: ' + err.message));
                resolve(result);
            });
        });

        await new Promise((resolve, reject) => {
            connection.commit((err) => {
                if (err) return reject(new Error('Error al confirmar la transacción: ' + err.message));
                resolve();
            });
        });

        return usuario_id;
    } catch (err) {
        await new Promise((resolve, reject) => {
            connection.rollback(() => {
                connection.end();
                reject(new Error('Error al registrar el usuario: ' + err.message));
            });
        });
    } finally {
        connection.end();
    }
}

async function authenticateUser(email, password) {
    const connection = createConnection();

    const query = 'SELECT usuario_id, email, contraseña FROM Cuentas WHERE email = ?';
    try {
        const results = await new Promise((resolve, reject) => {
            connection.query(query, [email], (err, result) => {
                if (err) return reject(new Error('Error en la consulta: ' + err.message));
                resolve(result);
            });
        });

        if (results.length === 0) {
            console.log('Usuario no encontrado.');
            return { authenticated: false };
        }

        const { usuario_id, contraseña: hashedPassword } = results[0];
        const passwordValida = await bcrypt.compare(password, hashedPassword);

        if (passwordValida) {
            const token = generateToken(usuario_id);
            console.log('Token generado:', token);
            return { authenticated: true, token, usuario_id };
        } else {
            console.log('Contraseña incorrecta.');
            return { authenticated: false };
        }
    } catch (err) {
        console.error('Error en la autenticación:', err);
        throw new Error('Error en la autenticación: ' + err.message);
    } finally {
        connection.end();
    }
}

async function obtenerUsuario(usuario_id) {
    const connection = createConnection();

    const query = 'SELECT * FROM Usuarios WHERE usuario_id = ?';
    try {
        const results = await new Promise((resolve, reject) => {
            connection.query(query, [usuario_id], (err, result) => {
                if (err) return reject(new Error('Error al obtener el usuario: ' + err.message));
                resolve(result);
            });
        });

        return results[0];
    } catch (err) {
        console.error('Error al obtener el usuario:', err);
        throw new Error('Error al obtener el usuario: ' + err.message);
    } finally {
        connection.end();
    }
}

module.exports = {
    registerUser,
    authenticateUser,
    obtenerUsuario
};
