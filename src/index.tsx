import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Secondary from './pages/Secondary';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from './pages/Users';
import TodoList from './pages/TodoList';
import TodoListAxios from './pages/TodoListAxios';
import Post from './pages/Post';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home/>} />
        <Route path="secondary" element={<Secondary/>} />
        <Route path="users" element={<Users/>} />
        <Route path="todo" element={<TodoList/>} />
        <Route path="todo/axios" element={<TodoListAxios/>} />
        <Route path="post/:id" element={<Post/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
