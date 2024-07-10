const express = require('express');
const pedidosController = require('../controllers/pedidosController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/crear'/*, authMiddleware*/, pedidosController.handleCrearPedido);
router.get('/:usuario_id'/*, authMiddleware*/, pedidosController.handleObtenerPedidosUsuario);
router.get('/historialCompras', pedidosController.handleObtenerHistorialPedidos);

module.exports = router;



