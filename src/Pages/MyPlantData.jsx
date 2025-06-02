// import React from 'react';
// import { Link } from 'react-router';

// const MyPlantData = ({plant}) => {

//     const {_id, image, name, category, description, careLevel, wateringFrequency, next, last, health, email, userName}=plant;


//     const handleDelete = (_id)=>{
//       console.log(_id);
      
//     }

//     return (
//         <div className="lg:p-6 p-2 overflow-x-auto">
//     <h2 className='text-3xl font-bold text-center mb-6 text-green-700'>All Plants</h2>
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr className='text-center bg-green-700 text-white'>
//             <th className='px-4 py-2 border'>Image</th>
//             <th className='px-4 py-2 border'>Name</th>
//             <th className='px-4 py-2 border'>Category</th>
//             <th className='px-2 py-2 border'>Watering Frequency</th>
//             <th className='px-2 py-2 border'>CareLevel</th>
//             <th className='px-2 py-2 border'>Last Watering Date</th>
//             <th className='px-2 py-2 border'>Plant Health</th>
//             <th className='px-8 py-2 border'>Description</th>
//             <th className='px-8 py-2 border'>Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr className='text-center hover:bg-green-50'>
//         <th className='px-4 py-2 border'>
//           <img className='w-16 h-16 object-cover mx-auto rounded-md' src={image} alt="" />
//         </th>
//         <td className='px-4 py-2 border'>{name}</td>
//         <td className='px-4 py-2 border'>{category}</td>
//         <td className='px-2 py-2 border'>{wateringFrequency}</td>
//         <td className='px-2 py-2 border'>{careLevel}</td>
//         <td className='px-2 py-2 border'>{last}</td>
//         <td className='px-2 py-2 border'>{health}</td>
//         <td className='px-8 py-2 border'>{description}</td>
//         <td className='px-8 py-2 border'>
        
//         <button className='bg-green-600 cursor-pointer text-white px-3 py-1 rounded hover:bg-green-700 transition-all duration-200 mr-5'>
//            Update
//         </button>
        
//         <button onClick={()=> handleDelete(_id)} className='bg-red-600 text-white px-3 cursor-pointer py-1 rounded transition-all duration-200'>
//            Delete
//         </button>
//         </td>
//       </tr>
      
//     </tbody>
    
//   </table>
// </div>
//     );
// };

// export default MyPlantData;


