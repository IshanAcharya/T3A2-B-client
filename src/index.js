import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Navbar.css';

// Render App component within ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);