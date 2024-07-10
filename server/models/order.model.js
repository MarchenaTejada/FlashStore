const { createConnection } = require('../database/database.js');

function obtenerHistorialPedidos(usuario_id, callback) {
    const connection = createConnection();
    const consulta = `SELECT * FROM VistaHistorialPedidos WHERE usuario_id = ?`;
    connection.query(consulta, [usuario_id], (err, results) => {
        connection.end();
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
}

module.exports = { obtenerHistorialPedidos };
