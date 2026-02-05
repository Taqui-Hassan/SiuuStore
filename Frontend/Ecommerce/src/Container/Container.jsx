import React from 'react'

function Container({ image, title }) {
    return (
      
        <div className='flex flex-col items-center'>
            
            <div className='h-64 w-full p-4 m-2 rounded-2xl  bg-indigo-100 flex items-center justify-center overflow-hidden relative group cursor-pointer'>
                
                {image ? (
                    <img 
                        src={image} 
                        alt={title} 
                
                        className='h-full w-full object-contain hover:scale-110 transition-transform duration-300' 
                    />
                ) : (
   
                    <span className="text-gray-400 font-bold">NO IMAGE</span>
                )}

            </div>

            {title && (
                <div className='font-bold text-lg text-blue-900 mt-1'>
                    {title}
                </div>
            )}
            
        </div>
    )
}

export default Container