const { verifyToken } = require('./jwt.js');

function authenticateMiddleware(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send({ message: 'No token provided.' });
  }

  verifyToken(token, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ message: 'Fallo critico loco.' });
    }

    req.usuario_id = decoded.usuario_id;
    next();
  });
}

module.exports = authenticateMiddleware;