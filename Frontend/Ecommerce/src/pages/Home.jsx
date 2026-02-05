import React from 'react'
import { useEffect, useState, useRef } from 'react';
import Container from '../Container/Container';
import unitedJersey from '../JERSEYS/2003UTDJ.webp'
import unitedJersey1 from '../JERSEYS/2008UTDJ.webp'
import rmj17 from '../JERSEYS/2017RMJ.webp'
import utdj21 from '../JERSEYS/JJ.webp'
import anj from '../JERSEYS/ANJ.webp'
import jj from '../JERSEYS/P16J.webp'
import p16j from '../JERSEYS/scpj.webp'
import scpj from '../JERSEYS/2021UTDJ.webp'
import a from '../JERSEYS/Nike Phantom Elite Phantom 6.webp'
import b from '../JERSEYS/Puma Future Ultimate.webp'
import c from '../JERSEYS/adidas F50 Elite.webp'
import d from '../JERSEYS/New Balance Furo.webp'
import e from '../JERSEYS/Nike Mercurial Vapor Elite.webp'
import f from '../JERSEYS/Puma Ultra Ultimate Ultra 6.webp'
function Home() {
  const jerseyRef = useRef(null);
  const bootsRef = useRef(null);
  const [isLoaded, setIsloaded] = useState(false);
  useEffect(() => {
    setIsloaded(true)
  }, [])

  const slide = (ref, shift) => {
    if (ref.current) {
      ref.current.scrollLeft += shift;
    }
  }
  return (
    <div className='flex flex-col gap-10 pb-10'>

      <div className='relative flex justify-center items-center '>


        <img
          src="/bg_imageCr7.png"
          alt="CR7 Celebration"
          className='w-110 h-110 object-cover opacity-50'
        />


        <div className='absolute inset-0 bg-black/50'></div>


        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white'>
          <h1 className={`text-5xl md:text-7xl font-bold tracking-tighter mb-4 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            CRISTIANO <span className='text-yellow-400'>RONALDO</span>
          </h1>
          <p className='text-xl md:text-2xl font-light mb-8'>
            Official CR7 Match Kits & Training Gear
          </p>
          <button className='bg-yellow-400 text px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform'>
            SHOP NOW
          </button>
        </div>
      </div>


      <div className='container mx-auto px-4 relative group'>

        <h2 className='text-2xl font-bold text-blue-900 mb-4 px-2'>Trending Jerseys</h2>


        <button
          onClick={()=>{slide(jerseyRef,-500)}}
          className='absolute left-0 top-[55%] z-10 bg-white/80 p-3 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-110 transition-all hidden group-hover:block'
        >
          ⬅️
        </button>


        <div
          ref={jerseyRef}
          className='flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide py-4 px-2'
          style={{ scrollbarWidth: 'none' }}
        >

          <div className='min-w-[250px]'> <Container image={unitedJersey} title="2003 UTD" /> </div>
          <div className='min-w-[250px]'> <Container image={unitedJersey1} title="2008 UTD" /> </div>
          <div className='min-w-[250px]'> <Container image={rmj17} title="Real Madrid 17" /> </div>
          <div className='min-w-[250px]'> <Container image={utdj21} title="Juve 2019" /> </div>
          <div className='min-w-[250px]'> <Container image={anj} title="Al Nassr" /> </div>
          <div className='min-w-[250px]'> <Container image={jj} title="Portugal 2016" /> </div>
          <div className='min-w-[250px]'> <Container image={p16j} title="Sporting CP" /> </div>
          <div className='min-w-[250px]'> <Container image={scpj} title="Man Utd Return" /> </div>
        </div>


        <button
         onClick={()=>{slide(jerseyRef,+500)}}
          className='absolute right-0 top-[55%] z-10 bg-white/80 p-3 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-110 transition-all hidden group-hover:block'
        >
          ➡️
        </button>

      </div>

      <div className='container mx-auto px-4 relative group'>

        <h2 className='text-2xl font-bold text-blue-900 mb-4 px-2'>Trending Boots</h2>


        <button
          onClick={()=>{slide(bootsRef,-500)}}
          className='absolute left-0 top-[55%] z-10 bg-white/80 p-3 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-110 transition-all hidden group-hover:block'
        >
          ⬅️
        </button>


        <div
          ref={bootsRef}
          className='flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide py-4 px-2'
          style={{ scrollbarWidth: 'none' }}
        >

          <div className='min-w-[250px]'> <Container image={a} title="Nike Phantom Elite Phantom 6" /> </div>
          <div className='min-w-[250px]'> <Container image={b} title="Puma Future Ultimate" /> </div>
          <div className='min-w-[250px]'> <Container image={c} title="adidas F50 Elite" /> </div>
          <div className='min-w-[250px]'> <Container image={d} title="New Balance Furo" /> </div>
          <div className='min-w-[250px]'> <Container image={e} title="Nike Mercurial Vapor Elite" /> </div>
          <div className=' min-w-[250px]'> <Container image={f} title="Puma Ultra Ultimate Ultra 6" /> </div>
        </div>


        <button
          onClick={()=>{slide(bootsRef,+500)}}
          className='absolute right-0 top-[55%] z-10 bg-white/80 p-3 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-110 transition-all hidden group-hover:block'
        >
          ➡️
        </button>

      </div>

    </div>
  )
}

export default Home 