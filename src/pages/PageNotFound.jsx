import React from 'react'
import Page from "../assets/pagenotfound.png"
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4 gap-7'>
          <h1 className='md:text-7xl text-4xl font-bold dark:text-white text-gray-700'>404 <span className='md:text-5xl text-2xl'>Page Not Found</span></h1>
          <div className='max-w-lg'>
            <img className='rounded' src={Page} alt="404 Page Not Found" /> 
          </div>
        </div>
        <div className='flex justify-center mt-6'>
          <button>
            <Link to="/" className='px-4 py-2 text-white font-semibold bg-blue-500 rounded-md hover:bg-blue-600'>Back To Cinemate</Link>
          </button>
        </div>
      </section>
    </main>
  )
}

export default PageNotFound
