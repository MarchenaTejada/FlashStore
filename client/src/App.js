import Header from './components/Header/Header';
import './App.css';

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
