import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/pages/app';
import Login from './pages/login';
import Adm from './pages/adm';
import Cadastro from './pages/cadastro';
import Edicao from './pages/edicao';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/adm' element={<Adm />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/edicao' element={<Edicao />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


