import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-[#E0E0E0] py-16 px-8 rounded-xl shadow-md flex flex-col items-center text-center'>
      <h1 className='text-4xl font-bold text-gray-800 max-md:text-xl'>Subscribe To Our Newsletter</h1>
      <p className='text-gray-600 text-lg max-w-lg mt-4'>
        Stay updated with our latest news and offers. Sign up for our newsletter and never miss out!
      </p>
      <div className='flex items-center gap-3 mt-6 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-300 w-full max-w-md'>
        <input
          type="text"
          placeholder="Enter your email"
          className='w-full p-2 outline-none text-gray-700'
        />
        <button className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition duration-300'>
          Send
        </button>
      </div>
    </div>
  )
}

export default Subscribe;
