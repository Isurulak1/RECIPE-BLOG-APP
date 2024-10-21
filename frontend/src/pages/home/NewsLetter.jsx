import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full md:w-2/3 max-auto flex flex-col items-center p-10 mx-[220px]' >
        <h3 className='text-secondary font-semibold text-center text-4xl'>Sign up for my weekly newsletter!</h3>
        <p className='mt-6 text-gray-600 text-lg text-center loading-normal font-light'>A newsletter description should briefly explain its purpose, content, and the value it offers to the readers.<br />Here's a sample newsletter description:</p>

        <div className='mt-6 flex flex-col md:flex-row items-center justify-center w-full md:px-8 gap-4 mb-20'>
            <input className='flex flex-grow px-4 py-4 rounded text-gray-400 outline-none placeholder:text-[#1b2629]' type="text" placeholder='name'/>
            <input className='flex flex-grow px-4 py-4 rounded text-gray-400 outline-none placeholder:text-[#1b2629]' type="text" placeholder='Email Address'/>
            <button className='mt-2 md:mt-0 md:ml-2 bg-btnColor hover:text-secondary outline-none hover:border hover:border-btnColor hover:bg-[#f9f7f3] text-white shadow-lg rounded px-8 py-3'>Get Started</button>
        </div>
    </div>
  )
}

export default NewsLetter