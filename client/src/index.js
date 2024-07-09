import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <ScrollToTop />
          <App />
        </ProductProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
