import React from 'react'
import { MainBody } from '../MainBody'

export const Form = () => {
  return (
     <div className='bg-white rounded-lg border border-gray-200 py-2 px-6'>
            <div className='mb-6'>
                <div className='flex bg-gray-100 p-2'>
                    <button className='w-full pr-6 rounded-none'>Sign In</button>
                    <button className='w-full pl-2 rounded-none'>Sign Up</button>
                </div>
            </div>

            <MainBody/>
        </div>
  )
}
