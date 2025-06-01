import React from 'react';
import { Link } from 'react-router';

const MyPlantData = ({plant}) => {

    const {_id, image, name, category, description, careLevel, wateringFrequency, next, last, health, email, userName}=plant;

    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-6 text-green-700'>My Plants</h2>
            <div className='bg-white shadow-md p-7 border border-gray-400 rounded-xl'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 '>
                <div>
                    <img className='rounded-lg object-cover h-[300px] lg:w-6xl lg:h-[400px]' src={image} alt="" />
                </div>
                <div>
                    <h1>{name}</h1>
                    <h3>Category: {category}</h3>
                    <p>WateringFrequency: {wateringFrequency}</p>
                    <p>Next Watered Date: {next}</p>
                    <p>Last Watering Date: {last}</p>
                    <h3>Plant Health: {health}</h3>
                </div>
            </div>
            <div>
                <p>Description: {description}</p>
            </div>
            </div>
        </div>
    );
};

export default MyPlantData;