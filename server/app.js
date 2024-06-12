const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hola mudno');
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto http://localhost:${PORT}/`);
});
