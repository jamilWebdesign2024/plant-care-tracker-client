import React, { use } from 'react';
import image from '../../src/assets/slider-3.jpg'
// import { AuthContext } from '../Context/AuthContext';

const Login = () => {

  // const {createUser} = use(AuthContext);
  // console.log(createUser);
  

  // const handleSignUp = e =>{
  //     e.preventDefault();
  //     const form = e.target;

  //     const formData = new FormData(form);
  //     const email = formData.get('email');
  //     const password = formData.get('password')
  //     console.log(email, password);

  //     // create user in the firebase

  //     createUser(email, password)
  //     .then(result =>{
  //       console.log(result);
        
  //     })

  //     .catch(error =>{
  //       console.log(error);
        
  //     })


  //   }

   return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clear Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Login Form - Glass Effect */}
      <div className="relative z-10 w-full max-w-sm mx-auto">
        <div className="card backdrop-blur-md bg-white/10 shadow-2xl border  border-white/10">
          <div className="card-body text-white">
            <div className='p-0 m-0'>
              <h1 className="text-3xl font-bold text-center">Login Your Plant Care Account</h1>
              <p className='text-center'><small>One account for all PlantCare products</small></p>
            </div>
            <form onSubmit={handleSignUp}> 
              <label className="label text-white">Email</label>
              <input
                type="email"
                name='email'
                className="w-full px-4 py-3 mb-2 text-gray-600 bg-green-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-neutral"
                placeholder="Enter your email"
              />
              <label className="label text-white">Password</label>
              <input
                type="password"
                name='password'
                className="w-full px-4 py-3 text-gray-600 bg-green-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-neutral mb-5"
                placeholder="Enter your password"
              />
              <div className="">
                <a className="link link-hover text-sm text-white">Forgot password?</a>
              </div>
              <button className="btn font-bold bg-green-400 hover:bg-green-500 mt-4 w-full border-none text-black">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
     

     
  );
};

export default Login;


