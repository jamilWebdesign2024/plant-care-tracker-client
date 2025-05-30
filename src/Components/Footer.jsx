import React, { use } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { SiFacebook } from 'react-icons/si';
import { NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Footer = () => {

     const {user}=use(AuthContext);

   return (
        <div className='bg-sky-900 p-7 text-white font-semibold text-center space-y-5 mt-12 '>
            <h1>PLANTCARE</h1>
            <div className='flex items-center justify-center gap-5 list-none'>
                 <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/allPlants'><li>All Plants</li></NavLink>
                <NavLink to='/addPlant'><li>Add Plant</li></NavLink>
                <NavLink to='/myPlants'><li>My Plants</li></NavLink>
                {!user && <NavLink to='/register'><li>Register</li></NavLink>}
            </div>
            <div className='flex items-center justify-center gap-5 mt-5'>
                    <a href='https://www.facebook.com/skudbjuj' target='_blank' rel='noopener noreferrer'>
                        <span className='text-2xl text-blue-700'><SiFacebook /></span>
                        </a>
                        <a href='https://www.linkedin.com/in/md-jamil-uddin-9886b4303/' target='_blank' rel='noopener noreferrer'>
                            <span className='text-2xl text-blue-700'><FaLinkedin /></span>
                        </a>
                        <a href='www.youtube.com/@MDJAMILUDDINJISHAN' target='_blank' rel='noopener noreferrer'>
                            <span className='text-2xl text-red-700'><IoLogoYoutube /></span>
                        </a>
                        <a href='https://www.instagram.com/jamiluddinjishan/' target='_blank' rel='noopener noreferrer'>
                            <span className='text-2xl'><PiInstagramLogoFill /></span>
                        </a>
                        
                    </div>
            <p><small>Copyright © 2025 - All right reserved by PlantCare</small></p>
        </div>
    );
};

export default Footer;