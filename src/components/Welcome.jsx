import React, { useState } from 'react'
import { Form } from './Form'

export const Welcome = ({name}) => {
    // const [names] = React.useState({});
    // const [data, setData] = useState
  return (
    <div className="flex justify-center items-center w-screen p-4">
      
      <div className='w-full max-w-md space-y-6'>
        <div className='text-center space-y-2'>
          <h1 className='text-3xl text-white'>Welcome {name}</h1>
          <p className='text-white'>Sign in to your account or create a new one</p>
        </div>

       <Form/>
      </div>

    </div>
  )
}
