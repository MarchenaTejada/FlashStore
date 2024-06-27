const mysql = require('mysql');

function createConnection() {
  const connection = mysql.createConnection({
    host: 'boefwtgj1nlcj5vcnbol-mysql.services.clever-cloud.com',
    user: 'u5q5n7kztk7md1yu',
    password: 'd4T0ZYMYEnv4Xo52cAzi',
    database: 'boefwtgj1nlcj5vcnbol',
    port: 3306
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error conectando a la base de datos: ', err);
      return;
    }
    console.log('Conexión establecida con éxito.');
  });

  return connection;
}

module.exports = {
  createConnection
};
