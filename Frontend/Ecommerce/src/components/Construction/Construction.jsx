import React from 'react'
import { Link } from 'react-router-dom'

function UnderConstruction({ title }) {
  return (
    <div className='min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 text-center px-4'>
      
      {/* Icon or Graphic */}
      <div className='text-6xl mb-6'>🚧</div>

      <h1 className='text-4xl font-bold text-blue-900 mb-4'>
        {title} <span className='text-yellow-500'>Coming Soon</span>
      </h1>
      
      <p className='text-gray-600 mb-8 max-w-md'>
        We are currently stocking up the shelves with the best gear. 
        Check back later for the official drop!
      </p>

      <Link to="/">
        <button className='bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors'>
            RETURN HOME
        </button>
      </Link>

    </div>
  )
}

export default UnderConstruction