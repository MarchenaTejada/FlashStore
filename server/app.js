const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/userRoutes');
const productosRoutes = require('./routes/productRoutes');
const pedidosRoutes = require('./routes/orderRoutes');
const favoritosRoutes = require('./routes/favoritesRoutes');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use('/api/auth', authRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/pedidos', pedidosRoutes);
app.use('/api/favoritos', favoritosRoutes);
app.post('/prueba', (req, res) => {
  const nombre = req.body.detalle[0].producto_id;
  console.log('Objeto recibido:', req.body);

  res.send(`Objeto recibido: ${nombre}`);
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
