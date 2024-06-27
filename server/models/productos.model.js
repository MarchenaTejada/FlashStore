const { createConnection } = require('../database/database.js');

function obtenerProductos(callback) {
  const connection = createConnection();
    consulta1= `SELECT * 
    FROM Productos p 
    INNER JOIN Categorias ct on p.categoria_id = ct.categoria_id 
    INNER JOIN Especificaciones esp on p.especificacion_id = esp.especificacion_id
    ORDER BY (p.producto_id)`;
    connection.query(consulta1, (err, results) => {
      connection.end();
      if (err) {
        return callback(err, null);
      }
      return callback(null, results);
    });
}
function obtenerProductoEspecifico(id_producto,callback) {
  const connection = createConnection();
  consulta2= `SELECT * 
    FROM Productos p 
    INNER JOIN Categorias ct on p.categoria_id = ct.categoria_id 
    INNER JOIN Especificaciones esp on p.especificacion_id = esp.especificacion_id
    WHERE p.producto_id = ?`;
    connection.query(consulta2 ,[id_producto] , (err, results) => {
      connection.end();
      if (err) {
        return callback(err, null);
      }
      return callback(null, results);
    });
}

function updateImgProduct(id_producto, image, callback) {
  const connection = createConnection();
  consulta2= `UPDATE Productos
SET imagen = ?
WHERE Productos.producto_id = ?;`;
    connection.query(consulta2 ,[image, id_producto] , (err, results) => {
      connection.end();
      if (err) {
        return callback(err, null);
      }
      return callback(null, results);
    });
}

// obtenerProductoEspecifico(id_producto,(err, results) => { console.log(results)});
//obtenerProductos((err, results) => { console.log(results)});

module.exports = { obtenerProductos, obtenerProductoEspecifico,updateImgProduct};