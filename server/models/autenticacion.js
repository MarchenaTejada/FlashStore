const { createConnection } = require('../database/database.js');
const bcrypt = require('bcryptjs');

function registerUser(password, email, nombre, apellido, direccion, telefono, callback) {
  const connection = createConnection();
  const saltRounds = 5;

  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      callback(err);
      return;
    }

    const cuentaQuery = 'INSERT INTO Cuentas (email, contraseña) VALUES (?, ?)';
    const usuarioQuery = 'INSERT INTO Usuarios (nombre, apellido, direccion, telefono) VALUES (?, ?, ?, ?)';

    connection.beginTransaction((err) => {
      if (err) {
        connection.end();
        callback(err);
        return;
      }

      connection.query(cuentaQuery, [email, hashedPassword], (err, cuentaResult) => {
        if (err) {
          return connection.rollback(() => {
            connection.end();
            callback(err);
          });
        }

        const usuario_id = cuentaResult.insertId;

        connection.query(usuarioQuery, [nombre, apellido, direccion, telefono], (err, usuarioResult) => {
          if (err) {
            return connection.rollback(() => {
              connection.end();
              callback(err);
            });
          }

          connection.commit((err) => {
            if (err) {
              return connection.rollback(() => {
                connection.end();
                callback(err);
              });
            }

            connection.end();
            callback(null, usuario_id);
          });
        });
      });
    });
  });
}

function authenticateUser(email, password, callback) {
  const connection = createConnection();
  
  const query = 'SELECT usuario_id, email, contraseña FROM Cuentas WHERE email = ?';
  
  connection.query(query, [email], (err, results) => {
    if (err) {
      callback(err);
      return;
    }
  
    if (results.length === 0) {
      callback(null, false);
      return;
    }
  
    const { usuario_id, contraseña: hashedPassword } = results[0];
  
    bcrypt.compare(password, hashedPassword, (err, passwordValida) => {
      if (err) {
        callback(err);
        return;
      }
  
      if (passwordValida) {
        callback(null, true, usuario_id);
      } else {
        callback(null, false);
      }
    });
  });
  
  connection.end();
}

function obtenerUsuarios(callback) {
  const connection = createConnection();
  
  const query = 'SELECT * FROM Usuarios';

  connection.query(query, (err, results) => {
    if (err) {
      callback(err);
      return;
    }

    callback(null, results);
  });

  connection.end();
}

module.exports = {
  registerUser,
  authenticateUser,
  obtenerUsuarios
};
