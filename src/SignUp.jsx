import React from 'react'
import { useState } from 'react'

export const SignUp = () => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("")
    const [pwd, setPwd] = React.useState("")
    const [confPwd, setConfPwd] = React.useState("")

    return (
        <div className='bg-white border border-gray-200 py-2 px-6'>

            <div className='text-center mb-4'>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Create Account</h2>
                <p className="text-gray-600 text-sm">Fill in your details to create a new account</p>
            </div>

            <form>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor='first-name' className='block text-sm font-medium text-gray-700 mb-1'>First Name</label>
                        <input id='first-name' type='text' placeholder='John' value={firstName} onChange={(e) => setFirstName(e.target.value)}  required className='w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm mb-2 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500' />
                    </div>


                    <div>
                        <label htmlFor='last-name' className='block text-sm font-medium text-gray-700 mb-1'>Last Name</label>
                        <input id='last-name' type='text' placeholder='Doe' value={lastName} onChange={(e) => setLastName(e.target.value)} required className='w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm mb-2 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500' />
                    </div>
                </div>

                <div>
                    <label htmlFor='login-email' className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                    <input id='sign-up-email' type='email' placeholder='Input your Email' value={email} onChange={(e) => setEmail(e.target.value)} required className='w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm mb-2 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500' />
                </div>

                <div>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
                    <input id='password' type='text & number' placeholder='Input your password' value={pwd} onChange={(e) => setPwd(e.target.value)} required className='w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm mb-2 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500' />
                </div>

                <div>
                    <label htmlFor='login-email' className='block text-sm font-medium text-gray-700 mb-1'>Confirm Password</label>
                    <input id='conf-password' type='text & number' placeholder='Confirm your Password' value={confPwd} onChange={(e) => setConfPwd(e.target.value)} required className='w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm mb-2 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500' />
                </div>

            </form>

            <button type='submit' className='w-full bg-emerald-600 text-white py-2 px-4 rounded-md mb-2 hover:bg-emerald-700 transition-colors mt-4'>Sign Up</button>

            <div className='text-center'>
                <button className='text-sm text-emerald-600 bg-transparent underline mb-3 hover:text-emerald-700 border-none'>Terms of Service</button>
            </div>

        </div>
    )
}
