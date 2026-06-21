import React from 'react'
import hero from '../../assets/hero_image.jpg'

function Hero() {
  return (
    <>
    <div className='mt-10 mb-10 md:mt-1 md:mb-1'>
      <img className=' w-full md:scale-100 scale-200 md:h-auto' src={hero} alt="" />
    </div>
    </> 
    
  )
}

export default Hero