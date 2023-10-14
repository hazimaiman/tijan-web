import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2  '>GROWING WITH NETWORK CONGESTION</p>
            <h1 className='md:text-7xl sm:text-6x1 text-4xl font-bold md:py-6'> Grow with network.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl fond-bold py-4'> Increase, Effiently Telco for</p>
                <Typed 
                className='md:text-5xl sm:text-4xl text-xl fond-bold md:pl-4 pl-2'
                  strings={['CT', 'FB','DC']} 
                  typeSpeed={120} 
                  backSpeed={140} 
                  loop/>
            </div>
            
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Maintaining and uprading the Physical Infrastructure such as Cell Tower, Fiber Optics and Data Center</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero