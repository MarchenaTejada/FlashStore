import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Catalogo from './pages/Catalogo.js';
import Detalle from './pages/Detalle.js';
import NotFound from './pages/Page404.js';
import Layout from './components/Layout/Layout.jsx'

function App() {
  return (
<<<<<<< Updated upstream
    <Header />
=======

        <Routes>
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:productId" element={<Detalle />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
>>>>>>> Stashed changes
  );
}

export default App;
