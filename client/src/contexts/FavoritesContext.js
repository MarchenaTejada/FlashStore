import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { usuario_id, isLoggedIn } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`/api/favoritos/favoritos/${usuario_id}`);
        setFavorites(response.data);
        console.log("ayudaloco");
      } catch (error) {
        console.error('Error al obtener favoritos:', error);
      }
    };

    if (isLoggedIn) {
      fetchFavorites();
    }
  }, [isLoggedIn, usuario_id]);

  const addFavorite = async (producto_id) => {
    try {
      await axios.post('/api/favoritos/favoritos', { usuario_id, producto_id });
      setFavorites(prevFavorites => [...prevFavorites, { usuario_id, producto_id }]);
    } catch (error) {
      console.error('Error al agregar favorito:', error);
    }
  };

  const removeFavorite = async (producto_id) => {
    try {
      await axios.delete('/api/favoritos/favoritos', { data: { usuario_id, producto_id } });
      setFavorites(prevFavorites => prevFavorites.filter(fav => fav.producto_id !== producto_id));
    } catch (error) {
      console.error('Error al eliminar favorito:', error);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
