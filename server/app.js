const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const { obtenerProductos, obtenerProductoEspecifico } = require("./models/productos.model")
const { registerUser, authenticateUser, obtenerUsuarios } = require("./models/autenticacion");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
  origin: '*'
}));

app.use(express.json());

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

app.post('/registro', (req, res) => {
  const { password, email, nombre, apellido, direccion, telefono } = req.body;
  registerUser(password, email, nombre, apellido, direccion, telefono, (err, userId) => {
    if (err) {
      console.error('Error durante el registro:', err);
      res.status(500).send({ error: err.message });
    } else {
      res.status(200).send({ userId });
    }
  });
});

app.get('/productos', (req, res) => {
  obtenerProductos((err, results) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.send(results);
    }
  });
});

app.get('/producto/:id', (req, res) => {
  const id = req.params.id;
  obtenerProductoEspecifico(id, (err, results) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.send(results);
    }
  });
});

app.get('/usuarios', (req, res) => {
  obtenerUsuarios((err, results) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.send(results);
    }
  });
});

app.get('/historialCompras', (req, res) => {
  obtenerHistorialProductos((err, results) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.send(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto http://localhost:${PORT}/`);
});
