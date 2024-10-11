import React from 'react'
// import desImg from '../assets/hero2.jpg'
import img from '../assets/hero1.jpg'
import { motion } from 'framer-motion'

function PopularDestinations() {

    const destinations = [
        { name: 'Dubai', flag: '', image: img, customClass: 'lg:col-span-2 col-span-4' },
        { name: 'London', flag: '', image: img, customClass: 'lg:col-span-2 col-span-2' },
        { name: 'Egypt', flag: '', image: img, customClass: 'lg:col-span-1 col-span-2' },
        { name: 'Paris', flag: '', image: img, customClass: 'lg:col-span-2 col-span-4' },
        { name: 'Thailand', flag: '', image: img, customClass: 'lg:col-span-1 hidden lg:block' },
    ]
    

  return (
    <div className='py-10 max-w-6xl mx-auto'>
        <div className="space-y-2">
            <h1 className='lg:text-5xl text-3xl font-semibold'>Popular destinations</h1>
            <h3 className='text-xl'>Most popular choices for travelers around the world</h3>
        </div>
      <div className="grid grid-cols-4 lg:gap-10 gap-3 py-10">
        {destinations.map((item, index) => (
            <motion.div
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
            }} 
            className={`relative ${item.customClass}`} key={index}>
                <img src={item.image} className='rounded hover:shadow-inner' alt="" />
                <h2 className='absolute lg:top-8 top-2 lg:left-6 left-2 text-xl lg:text-3xl font-bold text-white'>{item.name} <span>{item.flag}</span></h2>
            </motion.div>
        ))}
      </div>
    </div>
  )
}

export default PopularDestinations
