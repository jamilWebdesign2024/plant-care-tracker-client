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
import Loading from './Pages/Loading.jsx';



const router = createBrowserRouter([
  
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader:()=>fetch('newPlant.json'),
        Component: Home,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: 'allplants',
        loader: ()=>fetch('./allPlant.json'),
        Component: AllPlants,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/plantDetails/:id',
        loader: async ({ params }) => {
          const res = await fetch('/allPlant.json');
          const data = await res.json();
          const plant = data.find(item => item.id === params.id); // এখানে .id এর টাইপ চেক করো
          return plant;
        },
        element: (<PrivateRoute><PlantDetails /></PrivateRoute>),
        hydrateFallbackElement: <Loading></Loading>
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


