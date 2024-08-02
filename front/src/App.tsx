import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Write from './views/board/write';
import Update from './views/board/update';
import Detail from './views/board/detail';
import Main from './views/board/main';
import Container from './layout/container';

function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path="/" element={<Main />} />
        <Route path="/board/write" element={<Write />} />
        <Route path="/board/update/:boardId" element={<Update />} />
        <Route path="/board/detail/:boardId" element={<Detail />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
