import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Catalogo from './pages/Catalogo.js';
import Detalle from './pages/Detalle.js';
import Layout from './components/Layout/Layout.jsx'

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:productId" element={<Detalle />} />
          <Route path="/catalogo">
            <Route index element={<Catalogo />} />
            <Route path="smartphones" element={<Catalogo category={1} title='Smartphones'/>} />
            <Route path="smartwatches" element={<Catalogo category={2} title='Smartwatches' />} />
            <Route path="tablets" element={<Catalogo category={3} title='Tablets' />} />
            <Route path="accesorios" element={<Catalogo category={4} title='Accesorios' />} />
          </Route> 
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
