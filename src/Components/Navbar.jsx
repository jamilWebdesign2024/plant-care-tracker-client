// import React from 'react';
// import { NavLink } from 'react-router';

// const Navbar = () => {
//     const links = <>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About Us</NavLink>
//         <NavLink to="/details">Details</NavLink>
//         <NavLink to="/auth/login">Login</NavLink>
//         <NavLink to="/auth/register">Register</NavLink>
// </>
//     return (
//         <div className="navbar bg-base-100 shadow-sm">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex={0}
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                         {links}
//                     </ul>
//                 </div>
//                 <a className="btn btn-ghost text-xl">daisyUI</a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {links}
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 <a className="btn">Button</a>
//             </div>
//         </div>
//     );
// };

// export default Navbar;


import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../../src/assets/logo.jpg'
import { AuthContext } from '../Context/AuthContext';

const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/details">Details</NavLink>
        <NavLink to="/auth/login">Login</NavLink>
        <NavLink to="/auth/register">Register</NavLink>
</>

const Navbar = () => {
    
    const {user, logOut}=use(AuthContext);

    const handleLogout =()=>{
        console.log("logout successfully");
        logOut().then(() => {
            toast.success("Logout Successfully")
        })
        .catch((error) => {
            console.log(error);
            
        });

    }

    return (
        <div className='sticky top-0 z-50 bg-black/60 backdrop-blur-md text-white font-bold shadow-md'>
            
            <div className="navbar w-10/12 mx-auto ">
                    <div className="navbar-start">
                        
                        <img src={userIcon} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex items-center gap-5">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end gap-3">
                        <a className="lg:block hidden">{user && user.email}</a>
                        <div className='lg:block hidden'><img className='w-12 h-12 rounded-[50%]' src={`${user ? user.photoURL : null}`} alt="" /></div>
                        <div className='lg:block hidden'>
                            {
                            user ? <button onClick={handleLogout} className='btn bg-white text-black px-6 py-1'>Logout</button>
                            :  
                            <Link to="/auth/login"><button className='btn bg-white text-black px-6 py-1'>Login</button></Link>
                            }
                        </div>
                       
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col items-start text-start gap-1">
                            <div className='bg-white text-black flex flex-col justify-end'>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/about">About Us</NavLink>
                                <NavLink to="/details">Details</NavLink>
                                <NavLink to="/auth/register">Register</NavLink>
                                {
                                    user ? <Link onClick={handleLogout} className='text-black cursor-pointer'><span>Logout</span></Link>
                                    :  
                                    <Link to="/auth/login"><button className='text-black cursor-pointer'>Login</button></Link>
                                }
                                <img className='w-10 h-10 rounded-[50%]' src={`${user && user.photoURL}`} alt="" />
                                <a className="">{user && user.email}</a>
                            </div>
                            
                            
                        </ul>
                        </div>
            </div>

            
        </div>
    );
};

export default Navbar;