const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key'; 

function generateToken(usuario_id) {
  const payload = { usuario_id };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' }); 
}

function verifyToken(token, callback) {
  console.log(token);
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, decoded);
  });
}

module.exports = {
  generateToken,
  verifyToken
};