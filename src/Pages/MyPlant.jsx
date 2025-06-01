import React from 'react';
import { useLoaderData } from 'react-router';
import MyPlantData from './MyPlantData';

const MyPlant = () => {

    const plants = useLoaderData();
    
    

    return (
        <div>
            <div className='w-11/12 mx-auto p-4'>
                 {
                plants.map(plant=><MyPlantData key={plant._id} plant={plant}></MyPlantData>)
                } 
            </div>
        </div>
    );
};

export default MyPlant;