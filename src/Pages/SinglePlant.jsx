import React from 'react';
import { ImSpinner11 } from 'react-icons/im';
import { IoSearch } from 'react-icons/io5';

const SinglePlant = ({ singlePlant }) => {

    const { image1, name1, image2, name2, price, star } = singlePlant;


    return (
    

        <div className="group relative w-full text-center shadow-md rounded-md overflow-hidden bg-white">
            {/* Image Swap on Hover */}
            <div className="relative w-full h-80">
                <img
                    className="rounded-t-md w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                    src={image1}
                    alt={name1}
                />
                <img
                    className="rounded-t-md w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                    src={image2}
                    alt={name2}
                />

                {/* Black bottom bar with icons */}
                <div className="absolute bottom-0 w-full bg-black bg-opacity-80 flex items-center justify-around py-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="text-white text-sm hover:underline">Add to Cart</button>
                    <span className="text-white text-lg hover:text-red-500 cursor-pointer">♥</span>
                    <span className=" text-white text-lg"><ImSpinner11 /></span>
                    <span className="text-white text-lg cursor-pointer"><IoSearch /></span>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-5">
                <h3 className="font-semibold text-xl group-hover:hidden">{name1}</h3>
                <h3 className="font-semibold text-xl hidden group-hover:block">{name2}</h3>
                <p className="text-yellow-500">{star}</p>
                <h4 className="text-gray-700">${price}</h4>
            </div>
        </div>

    );
};

export default SinglePlant;


