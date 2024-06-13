import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Catalogo from './pages/Catalogo.js';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
