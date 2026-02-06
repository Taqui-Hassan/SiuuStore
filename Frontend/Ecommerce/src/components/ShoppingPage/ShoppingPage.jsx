// import React from 'react'
// import Footer from '../Footer/Footer'
// import Header from '../Header/header'
// import { useLocation } from 'react-router-dom'
// import Container from '../../Container/Container';

// function ShoppingPage() {
//     const location = useLocation();
//     const { title, image } = location.state || {};
//     return (
//         <div className='bg-indigo-100 text-black w-full max-h-full'>
//             <Header />
//             <div>
//                 <Container>
//                     {<img src={image} alt={title} />}
//                 </Container>

//             </div>
//             <div>
//                 {title}
//             </div>



//             <Footer />
//         </div>
//     )
// }

// export default ShoppingPage

import React from 'react'
import { useLocation, Link } from 'react-router-dom' // 1. Import useLocation
import Footer from '../Footer/Footer'
import Header from '../Header/Header.jsx'

function ShoppingPage() { // 2. Remove {id, image} from here. It comes from location!

    // 3. Grab the data sent from Home.jsx
    const location = useLocation();
    const { title, image } = location.state || {}; // Add || {} so it doesn't crash if empty

    // 4. Safety Check: If someone goes to this link directly without clicking a product
    if (!image) {
        return (
            <div className='min-h-screen bg-indigo-100 flex flex-col'>
                <Header />
                <div className='flex-grow flex flex-col items-center justify-center'>
                    <h2 className='text-2xl font-bold mb-4'>Product Not Found</h2>
                    <Link to="/" className='bg-blue-900 text-white px-6 py-2 rounded-full'>
                        Back to Home
                    </Link>
                </div>
                <Footer />
            </div>
        )
    }

    // 5. The Real Page
    return (
        <div className='bg-indigo-100 min-h-screen text-black w-full flex flex-col'>
            <Header />
            
            <div className='container mx-auto px-4 py-8 flex-grow'>
                <div className='bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-10 items-center'>
                    
                    {/* LEFT: The Image */}
                    <div className='w-full md:w-1/2'>
                        <img 
                            src={image}     // <--- USE src={image}
                            alt={title} 
                            className='w-full h-auto object-contain rounded-xl hover:scale-105 transition-transform' 
                        />
                    </div>

                    {/* RIGHT: The Details */}
                    <div className='w-full md:w-1/2 flex flex-col items-start'>
                        <h1 className='text-4xl md:text-5xl font-bold text-blue-900 mb-4'>
                            {title}
                        </h1>
                        <p className='text-gray-500 mb-6 text-lg'>
                            Official authentic merchandise. Premium quality fit for a champion.
                        </p>
                        
                        <div className='text-3xl font-bold text-green-600 mb-8'>
                            ₹5,000
                        </div>

                        <button className='bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-xl hover:bg-yellow-300 transition-colors w-full md:w-auto shadow-lg'>
                            ADD TO CART 🛒
                        </button>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ShoppingPage