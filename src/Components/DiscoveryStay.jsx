import React from 'react'
import hotelImg from '../assets/hotel.jpg'
import { motion } from 'framer-motion'

function DiscoveryStay() {

    const perfectStayList = [
        {name: 'Hotel', image: hotelImg},
        {name: 'Spa', image: hotelImg},
        {name: 'Villa', image: hotelImg},
        {name: 'Resort', image: hotelImg},
        {name: 'Beach view', image: hotelImg},
        // {name: 'Royal', image: hotelImg},
        // {name: 'Family Friendly', image: hotelImg},
        // {name: 'Beach', image: hotelImg},
        // {name: 'Staycation', image: hotelImg}
    ]

  return (
    <div className='py-10 pt-20 max-w-6xl mx-auto'>
        <div className="space-y-2">
            <h1 className='lg:text-5xl text-3xl font-semibold'>Discover your perfect stay</h1>
            <h3 className='text-xl'>Select your prefered resting place for your next trip</h3>
        </div>
      <div className="my-7 flex lg:gap-5 gap-3 overflow-auto">
      {perfectStayList.map((item, index) => (
        <div className="" key={index}>
            <motion.div 
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 1.0 }}
            className="lg:w-[230px] w-[200px] rounded-lg cursor-pointer" >
                <motion.div className="relative">
                    <img src={item.image} className='lg:w-[230px] w-[200px] rounded-xl' alt="" />
                    <p className='absolute left-3 bottom-3 text-lg text-white font-semibold '>{item.name}</p>
                </motion.div>
            </motion.div>
        </div>
        
      ))}
      </div>
    </div>
  )
}

export default DiscoveryStay
