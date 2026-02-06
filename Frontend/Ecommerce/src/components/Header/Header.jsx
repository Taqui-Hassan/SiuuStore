// import React from 'react'
// import { useState, useEffect } from 'react';
// import { useNavigate, Link, useLocation } from 'react-router-dom'



// function Header() {

//     const location = useLocation();
//     const navigate = useNavigate();
//     const navItems = [

//         { name: 'JERSEYS', id: 'jerseys' },
//         { name: 'BOOTS', id: 'boots' },
//         { name: 'TRAINING', slug: '/training' },
//         { name: 'SALE', slug: '/sale' },
        
//     ]
    
//     const hadleScroll = (sectionId) => {
       

       
       
//         if (location.pathname !== '/') {
          
//             navigate('/')
//             setTimeout(() => {
//                 const element = document.getElementById(sectionId);
         
//                 if (element) element.scrollIntoView({ behavior: 'smooth' })

//             }, 100)
//         } else {
//             const element = document.getElementById(sectionId);
//             if (element) {
//                 element.scrollIntoView({ behavior: 'smooth' });
//             }

//         }
//     }
//     return (
//         <>
//             <div id='heading' className='bg-indigo-100 p-2 text-center text-xs  tracking-widest'>
//                 FREE SHIPPING ON ORDERS OVER ₹5000 • WORLDWIDE DELIVERY
//             </div>

//             <header className='bg-white sticky top-0 z-50'>
//                 <div className='container mx-auto px-4 flex items-center h-24 relative'>
//                     <div>
//                         <img onClick={()=>{hadleScroll('heading')}} 
//                             src="/SiuuStoreLogo.png"
//                             alt="SiuuStore Logo"
//                             className='h-30 w-auto object-contain cursor-pointer'
//                         />

//                     </div>

//                     <nav className='md:flex items-center gap-8 font-semibold text-sm tracking-wide absolute left-1/2 transform -translate-x-1/2'>



//                         {navItems.map((item) => (


//                             <button
//                                 onClick={() => hadleScroll(item.id)}
//                                 className={`hover:text-yellow-400 cursor-pointer transition-colors duration-300 uppercase ${item.name == 'SALE' ? 'animate-bounce bg-indigo-100 rounded-full p-3' : ''} `}
//                             >
//                                 {item.name}

//                             </button>



//                         ))}
//                         {/* {<button className='hover:text-yellow-400 transition-colors duration-300 uppercase'
//                         onClick={()=>{navigate(it)}}>JERSEYS</button>}
//                         {<button className='hover:text-yellow-400 transition-colors duration-300 uppercase'>BOOTS</button>}
//                         {<button className='hover:text-yellow-400 transition-colors duration-300 uppercase'>TRAINING</button>}
//                         {<button className='hover:text-yellow-400 transition-colors duration-300 uppercase'>SALE</button>} */}

//                         {/* {['JERSEYS', 'BOOTS', 'TRAINING', 'SALE'].map((item) => (
//                             <button
//                                 key={item}
//                                 className='hover:text-yellow-400 transition-colors duration-300 uppercase'
//                             >
//                                 {item}
//                             </button>
//                         ))} */}
//                     </nav>



//                     <div className='flex items-center gap-6 ml-auto'>
//                         <button className='hover:text-yellow-400'>🔍</button>
//                         <button className='hover:text-yellow-400'>👤</button>
//                         <button className='relative hover:text-yellow-400'>
//                             🛒
//                             <span className='absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center'>
//                                 0
//                             </span>
//                         </button>
//                     </div>

//                 </div>

//             </header>
//         </>
//     )
// }

// export default Header
import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom'

function Header() {

    const location = useLocation();
    const navigate = useNavigate();
    const navItems = [
        { name: 'JERSEYS', id: 'jerseys' },
        { name: 'BOOTS', id: 'boots' },
        { name: 'TRAINING', slug: '/training' },
        { name: 'SALE', slug: '/sale' },
    ]
    
    const hadleScroll = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/')
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) element.scrollIntoView({ behavior: 'smooth' })
            }, 100)
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <>
            <div id='heading' className='bg-indigo-100 p-2 text-center text-xs tracking-widest'>
                FREE SHIPPING ON ORDERS OVER ₹5000 • WORLDWIDE DELIVERY
            </div>

            <header className='bg-white sticky top-0 z-50'>
                {/* 1. Added 'flex-wrap' and 'h-auto' for mobile ONLY. 
                    2. 'md:flex-nowrap' and 'md:h-24' forces your original Desktop layout back. */}
                <div className='container mx-auto px-4 flex flex-wrap md:flex-nowrap items-center justify-between h-auto md:h-24 relative py-2 md:py-0'>
                    
                    <div>
                        <img onClick={()=>{hadleScroll('heading')}} 
                            src="/SiuuStoreLogo.png"
                            alt="SiuuStore Logo"
                            /* 3. Mobile: h-12. Desktop: h-30 (Your original size) */
                            className='h-12 md:h-30 w-auto object-contain cursor-pointer'
                        />
                    </div>

                    {/* 4. Mobile: 'order-last w-full overflow-x-auto mt-2'.
                        5. Desktop: 'md:absolute md:left-1/2...' (Your exact original positioning restored) */}
                    <nav className='
                        flex items-center gap-6 overflow-x-auto w-full order-last mt-2 scrollbar-hide
                        md:gap-8 md:font-semibold md:text-sm md:tracking-wide 
                        md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:w-auto md:order-none md:mt-0 md:overflow-visible
                    '>
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => hadleScroll(item.id)}
                                /* Added whitespace-nowrap so text doesn't break on mobile */
                                className={`whitespace-nowrap hover:text-yellow-400 cursor-pointer transition-colors duration-300 uppercase ${item.name == 'SALE' ? 'animate-bounce bg-indigo-100 rounded-full p-3' : ''} `}
                            >
                                {item.name}
                            </button>
                        ))}
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

            </header>
        </>
    )
}

export default Header