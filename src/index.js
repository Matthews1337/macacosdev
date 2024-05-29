import React from 'react';
import './styles/index.css';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import MainPage from './Componentes/MainPage';
import LoginForm from './Componentes/LoginPage';
import {createBrowserRouter, RouterProvider  } from 'react-router-dom';
import RegisterForm from './Componentes/registerPage';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        {
          path: '/login',
          element: <LoginForm />
        },
        {
          path: '/register',
          element: <RegisterForm />
        },
        {
          path: '/main',
          element: <MainPage />
        }
    ],
  },
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
