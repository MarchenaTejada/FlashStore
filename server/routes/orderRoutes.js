const express = require('express');
const pedidosController = require('../controllers/pedidosController');

const router = express.Router();

router.get('/historialCompras', pedidosController.handleObtenerHistorialPedidos);

module.exports = router;
    