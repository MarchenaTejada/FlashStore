const { createConnection } = require('../database/database.js');

function crearPedido(usuario_id, metodo_pago_id, total, callback) {
    const connection = createConnection();
    const consulta = `
    INSERT INTO Pedidos (usuario_id, fecha_pedido, estado, total, metodo_pago_id)
    VALUES (?, NOW(), 'Pendiente', ?, ?)`;
    connection.query(consulta, [usuario_id, total, metodo_pago_id], (err, results) => {
        if (err) {
            connection.end();
            return callback(err, null);
        }
        const pedido_id = results.insertId;
        connection.end();
        return callback(null, { pedido_id });
    });
}

function agregarDetallePedido(pedido_id, producto_id, cantidad, precio_unitario, callback) {
    const connection = createConnection();
    const consulta = `
    INSERT INTO DetallesPedido (pedido_id, producto_id, cantidad, precio_unitario)
    VALUES (?, ?, ?, ?)`;
    connection.query(consulta, [pedido_id, producto_id, cantidad, precio_unitario], (err, results) => {
        connection.end();
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
}

function obtenerPedidosUsuario(usuario_id, callback) {
    const connection = createConnection();
    const consulta = `
    SELECT * FROM Pedidos WHERE usuario_id = ? ORDER BY fecha_pedido DESC`;
    connection.query(consulta, [usuario_id], (err, results) => {
        connection.end();
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
}

function obtenerHistorialPedidos(usuario_id, callback) {
    const connection = createConnection();
    const consulta = `
    SELECT u.usuario_id, u.nombre, u.apellido, p.pedido_id, p.fecha_pedido, dp.producto_id, prod.nombre AS nombre_producto,
    dp.cantidad, dp.precio_unitario, (dp.cantidad * dp.precio_unitario) AS total_producto, cat.nombre_categoria
    FROM Usuarios u
    JOIN Pedidos p ON u.usuario_id = p.usuario_id
    JOIN DetallesPedido dp ON p.pedido_id = dp.pedido_id
    JOIN Productos prod ON dp.producto_id = prod.producto_id
    JOIN Categorias cat ON prod.categoria_id = cat.categoria_id
    WHERE u.usuario_id = ?`;
    connection.query(consulta, [usuario_id], (err, results) => {
        connection.end();
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
}

module.exports = { crearPedido, agregarDetallePedido, obtenerPedidosUsuario ,obtenerHistorialPedidos};
