import { StrictMode} from 'react'
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
import ErrorPage from './Pages/ErrorPage.jsx';
import AddPlant from './Pages/AddPlant.jsx';
import MyPlant from './Pages/MyPlant.jsx';
import PrivateRoute from './Pages/PrivateRoute.jsx';
import PlantDetails from './Pages/PlantDetails.jsx';



const router = createBrowserRouter([
  
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader:()=>fetch('newPlant.json'),
        Component: Home
      },
      {
        path: 'allplants',
        loader: () => fetch('allPlant.json').then(res => res.json()),
        Component: AllPlants
      },
      {
        path: '/plantDetails/:id',
        loader: () => fetch('allPlant.json').then(res => res.json()), 
        element: <PrivateRoute><PlantDetails /></PrivateRoute>
      },
      {
        path: '/auth/login',
        Component: Login
      },
      {
        path: '/auth/register',
        Component: Register
      },
      {
        path: 'myPlants',
        element: (
          <PrivateRoute>
            <MyPlant />
          </PrivateRoute>
        )
      },
      {
        path: 'addPlant',
        element: (
          <PrivateRoute>
            <AddPlant />
          </PrivateRoute>
        )
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


