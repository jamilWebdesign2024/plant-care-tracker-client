import React from 'react';
import image1 from '../assets/banner_1.jpg'
import image2 from '../assets/banner_2.jpg'
import image3 from '../assets/banner_3.jpg'

import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className='w-9/12 mx-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-4 mt-12'>

                {/* Text + image1 */}
                <div className='flex text-center relative col-span-2'>
                    <div className='-mt-5 -ml-3'>
                        <img className='w-36 h-36' src={image1} alt="" />
                    </div>
                    <div className='absolute top-6 lg:w-10/12 w-full left-4 space-y-2'>
                        <p className='text-[#4ea9ae]'>Wellcome</p>
                        <h3 className='font-bold text-2xl'>PLANT CARE</h3>
                        <p><small>Every plant is unique and has its own requirements of sunlight, water and fertilizer. When given the correct conditions, plants will be healthy and thrive.</small></p>
                        <a className='text-[#4ea9ae] underline text-[12px]' href="#">Read More</a>
                    </div>
                </div>

                {/* Image 2 */}
                <div className="group relative max-w-80 max-h-64 overflow-hidden rounded-lg mx-auto">
                    <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={image2}
                        alt=""
                    />
                    <div className="absolute inset-0 rounded-lg border border-white opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                </div>

                {/* Image 3 */}
                <div className="group relative max-w-80 max-h-64 overflow-hidden rounded-lg mx-auto">
                    <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={image3}
                        alt=""
                    />
                    <div className="absolute inset-0 rounded-lg border border-white opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                </div>

            </div>

            {/* 2image */}
            <div className='grid lg:grid-cols-2 gap-5 w-9/12 sm:grid-cols-1 mx-auto mt-12'>

                {/* Banner Image 1 */}
                <div className='relative group banner-img max-w-full h-64 rounded overflow-hidden'>
                    {/* Overlay effect */}
                    <div className="absolute inset-0 bg-gray-700 opacity-60 group-hover:opacity-0 transition-opacity duration-700"></div>

                    {/* Text content */}
                    <div className='relative flex flex-col justify-center items-start h-full p-5 text-white font-bold z-10'>
                        <h1 className='text-xl'>A GARDEN LIKE</h1>
                        <p className='font-semibold'>We Know About</p>
                    </div>
                </div>

                {/* Banner Image 2 */}
                <div className='relative group banner-img2 max-w-full h-64 rounded overflow-hidden'>
                    {/* Overlay effect */}
                    <div className="absolute inset-0 bg-gray-700 opacity-60 group-hover:opacity-0 transition-opacity duration-700"></div>

                    {/* Text content */}
                    <div className='relative flex flex-col justify-center items-start h-full p-5 text-white font-bold z-10'>
                        <h1 className='text-xl'>GARDEN WORLD</h1>
                        <p className='font-semibold'>The Beauty</p>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Banner;