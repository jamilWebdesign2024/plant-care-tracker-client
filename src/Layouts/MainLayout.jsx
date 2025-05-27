import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;