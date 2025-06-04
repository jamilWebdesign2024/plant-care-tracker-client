import React, { use} from 'react';
import { Link, NavLink } from 'react-router';
import icon from '../../src/assets/icon.png'
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import './Navbaer.css';





const Navbar = () => {

    const { user, logOut } = use(AuthContext);
    // const navigate =useNavigate();


       
const handleLogout = () => {
        console.log("logout successfully");
        logOut().then(() => {
            // navigate('/auth/login');
            toast.success("Logout Successfully")

        })
            .catch((error) => {
                console.log(error);

            });

    }

    return (
        <div className='sticky top-0 bottom-0 z-50 bg-sky-900 bg-o h-auto text-white font-bold'>

            <div className="navbar lg:w-10/12 sm:w-full sm:p-2 mx-auto">
                <div className="navbar-start">
                    <div className='flex items-center gap-1'>
                        <img className='h-16 w-16' src={icon} alt="" />
                        <h3 className='text-2xl hidden lg:block'>PlantCare</h3>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center gap-5">
                        <NavLink to='/'><li>Home</li></NavLink>
                        <NavLink to='/allPlants'><li>All Plants</li></NavLink>
                        <NavLink to='/addPlant'><li>Add Plant</li></NavLink>
                        <NavLink to='/myPlants'><li>My Plants</li></NavLink>
                        {!user && <NavLink to='/auth/register'><li>Register</li></NavLink>}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex items-center gap-3 relative">

                    
                    {user && (
                        <div className="relative group">
                            <img
                                className='w-10 h-10 rounded-full cursor-pointer border-2 border-white'
                                src={user.photoURL || icon}
                                alt="User"
                            />
                            <div className="absolute top-12 right-0 bg-white text-black p-2 rounded shadow-md hidden group-hover:block min-w-[200px] z-10">
                                <p className='font-semibold'>{user.displayName || 'User'}</p>
                                <p className='text-sm'>{user.email}</p>
                            </div>
                        </div>
                    )}
                    {user ? (
                        <button onClick={handleLogout} className='btn bg-red-600 text-white'>Logout</button>
                    ) : (
                        <Link to="/auth/login">
                            <button className='btn bg-green-400 text-black'>Login</button>
                        </Link>
                    )}
                    {/* </div> */}

                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ml-40">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col items-start text-start gap-1">
                        <div className='bg-white text-black flex flex-col justify-end'>
                            <NavLink to='/'><li className='hover:bg-red-600 hover:text-white'>Home</li></NavLink>
                            <NavLink to='/allPlants'><li className='hover:bg-red-600 hover:text-white'>All Plants</li></NavLink>
                            <NavLink to='/addPlant'><li className='hover:bg-red-600 hover:text-white'>Add Plant</li></NavLink>
                            <NavLink to='/myPlants'><li className='hover:bg-red-600 hover:text-white'>My Plants</li></NavLink>
                            {
                                !user && <NavLink to='/auth/register'><li>Register</li></NavLink>
                            }
                            {
                                user ? <Link onClick={handleLogout} className='hover:bg-red-600 hover:text-white text-red-600'><span>Logout</span></Link>
                                    :
                                    <Link to="/auth/login"><button className='bg-green-400 text-black cursor-pointer'>Login</button></Link>
                            }
                            <img className='w-10 h-10 rounded-[50%]' src={`${user && user.photoURL}`} alt="" />
                            <a className="text-green-700">{user && user.email}</a>
                        </div>
                        

                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Navbar;



