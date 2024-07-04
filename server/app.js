const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { registerUser, authenticateUser, obtenerUsuarios } = require("./models/autenticacion");
const router = require("./routes/routes");
const authenticateMiddleware = require('./models/middleware');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
  origin: '*'
}));

app.use(express.json());
app.use(bodyParser.json());

app.use('/', router);

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

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  authenticateUser(email, password, (err, authenticated, token) => {
    if (err) {
      console.error('Error durante la autenticación:', err);
      res.status(500).send({ error: err.message });
    } else if (!authenticated) {
      res.status(401).send({ error: 'Credenciales incorrectas.' });
    } else {
      res.status(200).send({ token });
    }
  });
});
app.get('/usuarios', authenticateMiddleware, (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto http://localhost:${PORT}/`);
});
