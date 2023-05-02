import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login/Login/Login.jsx';
import Main from './layout/Main.jsx';
import AuthProvider from './context/AuthProvider/AuthProvider.jsx';
import Register from './Login/Register/Register.jsx';
import Home from './pages/Home/Home/Home.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import FoodItem from './pages/FoodItem/FoodItem.jsx';
import Blog from './pages/Blog/Blog.jsx';

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
      },
      {
        path: "/foodItem",
        element: <PrivateRoutes><FoodItem></FoodItem></PrivateRoutes>
      },
      {
        path: "/blog",
        element: <PrivateRoutes><Blog></Blog></PrivateRoutes>
      },
      {
        path: "/faq",
        element: <PrivateRoutes><FoodItem></FoodItem></PrivateRoutes>
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