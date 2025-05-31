import React, { use } from 'react';
// import { AuthContext } from './AuthProvder';
import { Navigate, useLocation } from 'react-router';
import Loading from './Loading';
import { AuthContext } from '../Context/AuthContext';
// import Loading from '../Pages/Loading/Loading';

const PrivateRoute = ({children}) => {

    const {user, loading}=use(AuthContext);
    

    const location =useLocation();
    
    

    if(loading){
        return <Loading></Loading>
    }
    

    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;


   
};

export default PrivateRoute;