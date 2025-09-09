import React, { useState } from 'react'
import { SignUp } from './SignUp';

export const LogIn = () => {
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  

 

  return (
    <div className='bg-white border border-gray-200 py-2 px-6'>
    
        <div>
          <div className="mb-4 text-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Sign In</h2>
              <p className="text-gray-600 text-sm">Enter your credentials to access your account</p>
            </div>
          </div>

          <form>
            <label htmlFor='login-email' className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
            <input id='login-email' type='email' placeholder='Input your email' value={email} onChange={(e) => setEmail(e.target.value)} required className='w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm mb-2 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500'/>
            <p className=' text-gray-400 p-1'>your email is: {email}</p> 

            <label htmlFor='login-password' className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
            <input id='login-password' type='password' placeholder='Input your password' value={pwd} onChange={(e) => setPwd(e.target.value)} required className='w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm mb-2 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500'/>
            <p className='text-gray-400 p-1'>your password is {pwd}</p>
          </form>

          <button type='submit' className='w-full bg-emerald-600 text-white py-2 px-4 rounded-md mb-2 hover:bg-emerald-700 transition-colors mt-4'>Sign In</button>

          <div className='text-center'>
            <button className='text-sm text-emerald-600 bg-transparent underline mb-3 hover:text-emerald-700 border-none'>Forgot your Password?</button>
          </div>
        </div>
    </div>
  );
}