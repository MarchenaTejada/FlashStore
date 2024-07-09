const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { registerUser, authenticateUser, obtenerUsuario } = require("./models/autenticacion");
const router = require("./routes/routes");
const authenticateMiddleware = require('./models/middleware');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', router);

app.post('/auth/registro', (req, res) => {
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

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  authenticateUser(email, password, (err, authenticated, token, usuario_id) => {
    if (err) {
      console.error('Error durante la autenticación:', err);
      res.status(500).send({ error: err.message });
    } else if (!authenticated) {
      res.status(401).send({ error: 'Credenciales incorrectas.' });
    } else {
      res.cookie('token', token, { httpOnly: true });
      res.status(200).send({ usuario_id });
    }
  });
});
app.get('/usuario', authenticateMiddleware, (req, res) => {
  const usuario_id = req.usuario_id;
  obtenerUsuario(usuario_id, (err, results) => {
      if (err) {
          console.error('Error obteniendo usuario:', err);
          return res.status(500).send({ error: err.message });
      } else {
          res.send(results);
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
