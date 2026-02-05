import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'


// import { useSelector } from 'react-redux'
function Header() {
    
    // const authStatus = useSelector((state) => { state.auth.active });
    const navigate = useNavigate();
    const navItems = [

        { name: 'JERSEYS', slug: '/jerseys' },
        { name: 'BOOTS', slug: '/boots' },
        { name: 'TRAINING', slug: '/training' },
        { name: 'SALE', slug: '/sale' },
    ]
    return (
        <header className='w-full sticky top-0 relative'>


            <div className='bg-indigo-100 p-2 text-center text-xs  tracking-widest'>
                FREE SHIPPING ON ORDERS OVER ₹5000 • WORLDWIDE DELIVERY
            </div>

            <div className='bg-white  shadow-lg'>


                <div className='container mx-auto px-4 flex items-center h-24 relative'>
                    <div>
                        <img
                            src="/SiuuStoreLogo.png"
                            alt="SiuuStore Logo"
                            className='h-30 w-auto object-contain'
                        />

                    </div>

                    <nav className='hidden md:flex items-center gap-8 font-semibold text-sm tracking-wide absolute left-1/2 transform -translate-x-1/2'>



                        {navItems.map((item) => (


                            <button
                                onClick={() => { navigate(item.slug) }}
                                className={`hover:text-yellow-400 cursor-pointer transition-colors duration-300 uppercase ${item.name == 'SALE' ? 'animate-bounce bg-indigo-100 rounded-full p-3' : ''} `}
                            >
                                {item.name} 
                                
                            </button>



                        ))}
                        {/* {<button className='hover:text-yellow-400 transition-colors duration-300 uppercase'
                        onClick={()=>{navigate(it)}}>JERSEYS</button>}
                        {<button className='hover:text-yellow-400 transition-colors duration-300 uppercase'>BOOTS</button>}
                        {<button className='hover:text-yellow-400 transition-colors duration-300 uppercase'>TRAINING</button>}
                        {<button className='hover:text-yellow-400 transition-colors duration-300 uppercase'>SALE</button>} */}

                        {/* {['JERSEYS', 'BOOTS', 'TRAINING', 'SALE'].map((item) => (
                            <button
                                key={item}
                                className='hover:text-yellow-400 transition-colors duration-300 uppercase'
                            >
                                {item}
                            </button>
                        ))} */}
                    </nav>



                    <div className='flex items-center gap-6 ml-auto'>
                        <button className='hover:text-yellow-400'>🔍</button>
                        <button className='hover:text-yellow-400'>👤</button>
                        <button className='relative hover:text-yellow-400'>
                            🛒
                            <span className='absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center'>
                                0
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header