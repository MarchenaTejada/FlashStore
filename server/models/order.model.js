const { createConnection } = require('../database/database.js');

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

module.exports = { obtenerHistorialPedidos };
