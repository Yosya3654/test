import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Импорт твоего текущего App (если он есть) или создаём его на лету
// Если у тебя нет src/App.jsx, мы создадим простую обёртку для игры ниже
import GameWrapper from './GameWrapper.jsx'; 

// 2. Импорт меню из папки mainmenu
import MenuApp from './mainmenu/App.jsx';
import './mainmenu/index.css'; // Стили меню

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Игра на главной странице */}
        <Route path="/" element={<GameWrapper />} />
        
        {/* Меню по адресу /menu */}
        <Route path="/menu/*" element={<MenuApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);