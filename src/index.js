import React from 'react';
import ReactDOM from 'react-dom/client'; // Import từ 'react-dom/client' cho React 19
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Tạo root bằng createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render ứng dụng với BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);