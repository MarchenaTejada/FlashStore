const { obtenerHistorialPedidos } = require('../models/order.model');

function handleObtenerHistorialPedidos(req, res) {
    const usuario_id = req.query.usuario_id;
    console.log("Hola")
    obtenerHistorialPedidos(usuario_id, (err, results) => {
        if (err) {
            res.status(500).send({ error: err.message });
        } else {
            res.send(results);
        }
    });
}

module.exports = { handleObtenerHistorialPedidos };
