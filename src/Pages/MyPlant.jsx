import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
// import MyPlantData from './MyPlantData';

const MyPlant = () => {

    const plants = useLoaderData();

    const [initialplants, setintialPlants]=useState(plants);


    const {_id, image, name, category, description, careLevel, wateringFrequency, next, last, health, email, userName}=plants;

    const handleDelete = (_id)=>{
      console.log(_id);

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed);
            
        if (result.isConfirmed) {
            
            // start deleting the coffee
            fetch(`http://localhost:3000/plants/${_id}`,{
                method: 'DELETE',

            })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount){
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your Plant has been deleted.",
                        icon: "success"
                        });

                        // remove the plants from the state
                        const remainingPlants = initialplants.filter(plant => plant._id !== _id);
                        setintialPlants(remainingPlants);
                    }
                })
            
            
        }
        });
            
    }
    

    return (
        <div className='lg:p-6 p-2 overflow-x-auto'>
            <h2 className='text-3xl font-bold text-center mb-6 text-green-700'>All Plants</h2>
            <table className="table">
            {/* head */}
            <thead>
            <tr className='text-center bg-green-700 text-white'>
                    <th className='px-4 py-2 border'>Image</th>
                    <th className='px-4 py-2 border'>Name</th>
                    <th className='px-4 py-2 border'>Category</th>
                    <th className='px-2 py-2 border'>Watering Frequency</th>
                    <th className='px-2 py-2 border'>CareLevel</th>
                    <th className='px-2 py-2 border'>Last Watering Date</th>
                    <th className='px-2 py-2 border'>Plant Health</th>
                    <th className='px-8 py-2 border'>Description</th>
                    <th className='px-8 py-2 border'>Actions</th>
            </tr>
            </thead>
            <tbody>
                
                 {
                initialplants.map(plant=><tr key={plant._id} className='text-center hover:bg-green-50'>
                    <th className='px-4 py-2 border'>
                    <img className='w-16 h-16 object-cover mx-auto rounded-md' src={plant.image} alt="" />
                    </th>
                    <td className='px-4 py-2 border'>{plant.name}</td>
                    <td className='px-4 py-2 border'>{plant.category}</td>
                    <td className='px-2 py-2 border'>{plant.wateringFrequency}</td>
                    <td className='px-2 py-2 border'>{plant.careLevel}</td>
                    <td className='px-2 py-2 border'>{plant.last}</td>
                    <td className='px-2 py-2 border'>{plant.health}</td>
                    <td className='px-8 py-2 border'>{plant.description}</td>
                    <td className='px-8 py-2 border'>
                    
                        <Link to={`/updatePlants/${plant._id}`}>
                            <button className='bg-green-600 cursor-pointer text-white px-3 py-1 rounded hover:bg-green-700 transition-all duration-200 mr-5'>
                            Update
                            </button>
                        </Link>
                        
                        <button onClick={()=> handleDelete(plant._id)} className='bg-red-600 text-white px-3 cursor-pointer py-1 rounded transition-all duration-200'>
                        Delete
                        </button>
                    </td>
                </tr>)
                } 
            
            </tbody>
            </table>
        </div>
    );
};

export default MyPlant;

