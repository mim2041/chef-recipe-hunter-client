import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home/Home.jsx';
import Login from './Login/Login/Login.jsx';
import Main from './layout/Main.jsx';
import AuthProvider from './context/AuthProvider/AuthProvider.jsx';
import Register from './Login/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
