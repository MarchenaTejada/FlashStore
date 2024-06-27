const { createConnection } = require('../database/database.js');
const bcrypt = require('bcryptjs');

function registerUser(contraseña, email, nombre, direccion, telefono, callback) {
  const connection = createConnection();
  const saltRounds = 5;

  bcrypt.hash(contraseña, saltRounds, (err, hashedPassword) => {
    if (err) {
      callback(err);
      return;
    }

    const cuentaQuery = 'INSERT INTO Cuentas (email, contraseña) VALUES (?, ?)';
    const usuarioQuery = 'INSERT INTO Usuarios (nombre, direccion, telefono) VALUES (?, ?, ?)';

    connection.beginTransaction((err) => {
      if (err) {
        callback(err);
        return;
      }

      connection.query(cuentaQuery, [email, hashedPassword], (err, cuentaResult) => {
        if (err) {
          return connection.rollback(() => {
            callback(err);
          });
        }

        const usuario_id = cuentaResult.insertId;

        connection.query(usuarioQuery, [nombre, direccion, telefono], (err, usuarioResult) => {
          if (err) {
            return connection.rollback(() => {
              callback(err);
            });
          }

          connection.commit((err) => {
            if (err) {
              return connection.rollback(() => {
                callback(err);
              });
            }

            callback(null, usuario_id);
          });
        });
      });
    });
  });

  connection.end();
}

function authenticateUser(email, contraseña, callback) {
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
  
      bcrypt.compare(contraseña, hashedPassword, (err, ContraseñaValida) => {
        if (err) {
          callback(err);
          return;
        }
  
        if (ContraseñaValida) {
          callback(null, true, usuario_id);
        } else {
          callback(null, false);
        }
      });
    });
  
    connection.end();
  }
  
module.exports = {
    registerUser,
    authenticateUser
};