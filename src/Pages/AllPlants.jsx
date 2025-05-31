
import { img } from 'framer-motion/client';
import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllPlants = () => {
    // const [plants, setPlants]=useState(data);
    const data = useLoaderData();
    console.log(data);
    

    return (
        <div className="lg:p-6 p-2 overflow-x-auto">
    <h2 className='text-3xl font-bold text-center mb-6 text-green-700'>All Plants</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-center bg-green-700 text-white'>
            <th className='px-4 py-2 border'>Image</th>
            <th className='px-4 py-2 border'>Plant Name</th>
            <th className='px-4 py-2 border'>Category</th>
            <th className='px-4 py-2 border'>Watering Frequency</th>
            <th className='px-4 py-2 border'>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map(plant=><tr key={plant.id} className='text-center hover:bg-green-50'>
        <th className='px-4 py-2 border'>
          <img className='w-16 h-16 object-cover mx-auto rounded-md' src={plant.image} alt="" />
        </th>
        <td className='px-4 py-2 border'>{plant.name}</td>
        <td className='px-4 py-2 border'>{plant.category}</td>
        <td className='px-4 py-2 border'>{plant.wateringFrequency}</td>
        <td className='px-4 py-2 border'>
        <Link to={`/plantDetails/${plant.id}`}>
        <button className='bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-all duration-200'>
           View Details
        </button>
        </Link>
        </td>
      </tr>)
      }
      
    </tbody>
    
  </table>
</div>
    );
};

export default AllPlants;




