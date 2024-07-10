const { agregarFavorito, eliminarFavorito, obtenerFavoritos } = require('../models/favoritos.model');

exports.addFavorite = (usuario_id, producto_id) => {
  return new Promise((resolve, reject) => {
    agregarFavorito(usuario_id, producto_id, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

exports.removeFavorite = (usuario_id, producto_id) => {
  return new Promise((resolve, reject) => {
    eliminarFavorito(usuario_id, producto_id, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

exports.getFavorites = (usuario_id) => {
  return new Promise((resolve, reject) => {
    obtenerFavoritos(usuario_id, (err, favorites) => {
      if (err) reject(err);
      else resolve(favorites);
    });
  });
};
