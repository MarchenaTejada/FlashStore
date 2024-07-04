const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { obtenerProductos, obtenerProductoEspecifico } = require("./models/productos.model");
const { registerUser, authenticateUser, obtenerUsuario } = require("./models/autenticacion");
const { generateToken, verifyToken } = require('./models/jwt');
const authenticateMiddleware = require('./models/middleware');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
  origin: 'http://localhost:3000', // Cambia esto a la URL de tu frontend
  credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

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

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  authenticateUser(email, password, (err, authenticated, token, usuario_id) => {
    if (err) {
      console.error('Error durante la autenticación:', err);
      res.status(500).send({ error: err.message });
    } else if (!authenticated) {
      res.status(401).send({ error: 'Credenciales incorrectas.' });
    } else {
      obtenerUsuario(email, (err, results) => {
        if (err) {
          return res.status(500).send({ error: 'Error al obtener información del usuario' });
        }
        const user = results[0];
        res.cookie('token', token, { httpOnly: true, secure: false }); // Configura secure: true en producción
        res.status(200).send({ usuario_id, token });
      });
    }
  });
});


app.post('/registro', (req, res) => {
  const { password, email, nombre, apellido, direccion, telefono } = req.body;
  registerUser(password, email, nombre, apellido, direccion, telefono, (err, userId) => {
    if (err) {
      console.error('Error durante el registro:', err);
      res.status(500).send({ error: err.message });
    } else {
      const token = generateToken(userId);
      obtenerUsuario(userId, (err, results) => {
        if (err) {
          return res.status(500).send({ error: 'Error al obtener información del usuario' });
        }
        const user = results[0];
        res.cookie('token', token, { httpOnly: true, secure: false }); // Configura secure: true en producción
        res.status(200).send({ user, token });
      });
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

app.get('/usuario', authenticateMiddleware, (req, res) => {
  const usuario_id = req.usuario_id;
  console.log(usuario_id)
  obtenerUsuario(usuario_id, (err, results) => {
    if (err) {
      console.error('Error obteniendo usuario:', err);
      return res.status(500).send({ error: err.message });
    } else if (results.length === 0) {
      return res.status(404).send({ error: 'Usuario no encontrado' });
    } else {
      return res.send({ user: results[0] });
    }
  });
});

app.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.status(200).send({ message: 'Logout successful' });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto http://localhost:${PORT}/`);
});
