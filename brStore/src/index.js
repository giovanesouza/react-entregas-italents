import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Ativa sistema de roteamento no app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
