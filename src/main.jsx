import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import AllPlants from './Pages/AllPlants.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'allplants',
        Component: AllPlants
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
