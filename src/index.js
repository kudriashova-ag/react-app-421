import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router';
import ToDoList from './components/todo/ToDoList';
import Example from './components/example/Example';
import Users from './pages/Users';
import User from './pages/User';
import ThemeContext from './contexts/ThemeContext';
import ThemeProvider from './providers/ThemeProvider';
import First from './pages/First';
import Second from './pages/Second';
import Menu from './pages/Menu';
import About from './pages/About';
import Contacts from './pages/Contacts';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<h1>Home</h1>} />
              <Route path="/example" element={<Example />} />
              <Route path="/todo" element={<ToDoList />} />

              <Route path="/users" element={<Users />}>
                <Route path="/users/:id" element={<User />} />
              </Route>

          
              <Route path="/first" element={<First />} />
              <Route path="/second" element={<Second />} />

          
            <Route path="/pages" element={<Menu />}>
              <Route index element={<About />} />
              <Route path="contacts" element={<Contacts />} />
            </Route>


            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
