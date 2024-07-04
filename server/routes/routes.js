const express = require('express');
const bodyParser = require('body-parser');
const productosController = require('../controllers/productosController');
const pedidosController = require('../controllers/pedidosController');
// const usuariosController = require('../controllers/usuariosController');

const router = express.Router();

router.use(bodyParser.json());

// Rutas para productos
router.get('/productos', productosController.handleObtenerProductos);
router.get('/producto/:id', productosController.handleObtenerProductoEspecifico);

// Rutas para usuarios (comentadas por ahora)
// router.post('/registro', usuariosController.handleRegisterUser);
// router.get('/usuarios', usuariosController.handleObtenerUsuarios);

// Rutas para pedidos
router.get('/historialCompras', pedidosController.handleObtenerHistorialPedidos);

module.exports = router;
