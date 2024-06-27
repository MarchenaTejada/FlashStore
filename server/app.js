const express = require('express');
const mysql = require ('mysql');
const cors = require('cors');
const app = express();
const { obtenerProductos, obtenerProductoEspecifico } = require("./models/productos.model")

app.use(cors({
  origin: '*'
}));
const PORT = process.env.PORT || 8000;


const conexion = mysql.createConnection({
  host: 'boefwtgj1nlcj5vcnbol-mysql.services.clever-cloud.com',
  user: 'u5q5n7kztk7md1yu',
  password: 'd4T0ZYMYEnv4Xo52cAzi',
  database: 'boefwtgj1nlcj5vcnbol',
  port: 3306
});

conexion.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos: ', err);
    return;
  }
  console.log('Conexión establecida con éxito.');
});


app.get('/productos', (req, res) => {
  obtenerProductos((err, results) => { res.send(results)});
});

app.get('/producto/:id', (req, res) => {
  const id = req.params.id
  obtenerProductoEspecifico(id,(err, results) => { res.send(results)});
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto http://localhost:${PORT}/`);
});

