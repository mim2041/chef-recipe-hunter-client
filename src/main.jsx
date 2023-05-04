import React from 'react'
import ReactDOM from 'react-dom/client'
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
import Details from './pages/Details/Details.jsx';
import FoodsContainer from './pages/FoodsContainer/FoodsContainer.jsx';
import NotFound from './Others/NotFound/NotFound.jsx';
import { Toaster } from 'react-hot-toast';

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
        element: <PrivateRoutes><FoodItem></FoodItem></PrivateRoutes>,
        children: [
          {
            path: '/foodItem',
            element: <FoodsContainer></FoodsContainer>,
            loader: ({params}) => fetch(`https://chef-recipe-hunter-server-mim2041.vercel.app/categories/Fruits`)
          },
          {
            path: '/foodItem/:category',
            element: <FoodsContainer></FoodsContainer>,
            loader: ({params}) => fetch(`https://chef-recipe-hunter-server-mim2041.vercel.app/categories/${params.category}`)
          }
        ]
      },
      {
        path: "/blog",
        element: <PrivateRoutes><Blog></Blog></PrivateRoutes>
      },
      {
        path: "/faq",
        element: <PrivateRoutes><FoodItem></FoodItem></PrivateRoutes>
      },
      {
        path: '/recipes/:id',
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: ({params}) => fetch(`https://chef-recipe-hunter-server-mim2041.vercel.app/recipes/${params.id}`)
      }
    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>,
)