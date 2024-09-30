const { crearPedido, agregarDetallePedido, obtenerPedidosUsuario, obtenerHistorialPedidos } = require('../models/order.model');

const crearPedidoAsync = (usuario_id, metodo_pago_id, total) => 
    new Promise((resolve, reject) => {
        crearPedido(usuario_id, metodo_pago_id, total, (err, pedido) => {
            if (err) return reject(new Error(err.message || 'Error al crear el pedido'));
            resolve(pedido);
        });
    });

const agregarDetallePedidoAsync = (pedido_id, producto_id, cantidad, precio_unitario) => 
    new Promise((resolve, reject) => {
        agregarDetallePedido(pedido_id, producto_id, cantidad, precio_unitario, (err, result) => {
            if (err) return reject(new Error(err.message || 'Error al agregar detalle del pedido'));
            resolve(result);
        });
    });

const obtenerPedidosUsuarioAsync = (usuario_id) => 
    new Promise((resolve, reject) => {
        obtenerPedidosUsuario(usuario_id, (err, results) => {
            if (err) return reject(new Error(err.message || 'Error al obtener los pedidos del usuario'));
            resolve(results);
        });
    });

const obtenerHistorialPedidosAsync = (usuario_id) => 
    new Promise((resolve, reject) => {
        obtenerHistorialPedidos(usuario_id, (err, results) => {
            if (err) return reject(new Error(err.message || 'Error al obtener el historial de pedidos'));
            resolve(results);
        });
    });

async function handleCrearPedido(req, res) {
    try {
        const { usuario_id, metodo_pago_id, total, detalles } = req.body;

        const pedido = await crearPedidoAsync(usuario_id, metodo_pago_id, total);
        const { pedido_id } = pedido;

        const detallesResultados = await Promise.all(
            detalles.map(detalle => 
                agregarDetallePedidoAsync(pedido_id, detalle.producto_id, detalle.cantidad, detalle.precio_unitario)
            )
        );

        res.send({ pedido_id, detalles: detallesResultados });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

async function handleObtenerPedidosUsuario(req, res) {
    try {
        const usuario_id = req.params.usuario_id;
        const pedidos = await obtenerPedidosUsuarioAsync(usuario_id);
        res.send(pedidos);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

async function handleObtenerHistorialPedidos(req, res) {
    try {
        const usuario_id = req.query.usuario_id;
        const historial = await obtenerHistorialPedidosAsync(usuario_id);
        res.send(historial);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

module.exports = {
    handleCrearPedido,
    handleObtenerPedidosUsuario,
    handleObtenerHistorialPedidos
};
