import { useState } from 'react';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';

function App() {
  const [activePage, setActivePage] = useState('login');

  return (
    <div className="flex justify-center items-center w-screen p-9 bg-black">

      <div className='w-full max-w-md space-y-2 -mb-4'>
        <div className='text-center space-y-2'>
          <h1 className='text-3xl text-white'>Welcome </h1>
          <p className='text-white'>Sign in to your account or create a new one or else</p>
        </div>

{/* buttons */}
        <div className='m-3 w-full'>
          <div className='flex bg-white p-1'>
            <button
              onClick={() => setActivePage('login')}
              className={`w-full pr-6 rounded-none ${activePage === 'login' ? 'bg-black text-white' : 'bg-gray-200 text-black hover:bg-emerald-600 hover:text-white'}`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActivePage('signup')}
              className={`w-full pl-2 rounded-none ${activePage === 'signup' ? 'bg-black text-white' : 'bg-gray-200 text-black hover:bg-emerald-600 hover:text-white'}`}
            >
              Sign Up
            </button>
          </div>
          
          {activePage === 'signup' && (
          <SignUp />
        )}

        {activePage === 'login' && (
          <LogIn />
        )}

        </div>

        


        {/* <LogIn/> */}
      </div>

    </div>
  )
}

export default App;
