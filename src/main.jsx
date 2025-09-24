import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Importa el App correcto
import './index.css';        // estilos globales si los tienes

ReactDOM.createRoot(document.getElementById('root')).render(             // Vite usa 'createRoot' en lugar de 'ReactDOM.render'
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
