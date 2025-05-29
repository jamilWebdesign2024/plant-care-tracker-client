import React from 'react';
import image from '../../src/assets/slider-2.jpg'
import { AuthContext } from '../Context/AuthContext';

const Register = () => {

  const {createUser} = use(AuthContext);
    console.log(createUser);

  

  const handleSignUp = e =>{
      e.preventDefault();
      const form = e.target;

      const formData = new FormData(form);
      const newUser = Object.fromEntries(formData.entries())

      const email = formData.get('email');
      const password = formData.get('password')
      console.log(email, password);

      // create user in the firebase

      createUser(email, password)
      .then(result =>{
        console.log(result);
        
      })

      .catch(error =>{
        console.log(error);
        
      })


    }



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

            <h1 className="text-3xl font-bold text-center mb-4">Create a PlanCare Account</h1>

            <form onSubmit={handleSignUp}>

              <div className='space-y-3 mb-5'>
                  <input
                    type="text"
                    name='name'
                    className="w-full px-4 py-3 text-gray-600 bg-green-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-neutral"
                    placeholder="Enter your name"
                  />

                  <input
                    type="text"
                    name='photo'
                    className="w-full px-4 py-3 text-gray-600 bg-green-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-neutral"
                    placeholder="Enter your Photo Url"
                  />

                  <input
                    type="email"
                    name='email'
                    className="w-full px-4 py-3 text-gray-600 bg-green-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-neutral"
                    placeholder="Enter your email"
                  />

                  <input
                    type="password"
                    name="password"
                    className="w-full px-4 py-3 text-gray-600 bg-green-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-neutral"
                    placeholder="Enter your password"
                  />
              </div>

              <div className='text-center flex flex-col items-center justify-center gap-4'>
                <button className="btn font-bold bg-green-400 hover:bg-green-500 mt-4 w-full border-none text-black">
                  Register your Account
                </button>
                <span>or</span>
                <button className="btn font-bold bg-white hover:bg-green-500 mt-4 w-full border-none text-black">
                  Sign in With Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;