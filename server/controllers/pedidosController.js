const { obtenerHistorialPedidos } = require('../models/historialPedidos');

function handleObtenerHistorialPedidos(req, res) {
    const usuario_id = req.query.usuario_id;  // Asumiendo que el ID del usuario viene como un parámetro de query
    obtenerHistorialPedidos(usuario_id, (err, results) => {
        if (err) {
            res.status(500).send({ error: err.message });
        } else {
            res.send(results);
        }
    });
}

module.exports = { handleObtenerHistorialPedidos };
