import { LocateIcon, MapPin, Minus, Plus, Search, User2 } from 'lucide-react'
import React, { useState } from 'react'
import StayDuration from './StayDuration'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { motion } from 'framer-motion';
import RoomInfo from './RoomInfo';

function HeroSection() {

  const [showRoomInfo, setShowRoomInfo] = useState(false)
  const [room, setRoom] = useState(1)
  const [children, setChildren] = useState(0)
  const [adults, setAdults] = useState(2)


  // Increment 
  const addRoom = () => {
    setRoom(room + 1)
  }
  const addChild = () => {
    setChildren(children + 1) 
  }
  const addAdults = () => {
    setAdults(adults + 1) 
  }

  // Decrement
  const subtractRoom = () => {
    setRoom(room - 1)
  }
  const subtractChild = () => {
    setChildren(children - 1) 
  }
  const subtractAdults = () => {
    setAdults(adults - 1) 
  }

  const closeRoomInfo = () => {
    setShowRoomInfo(false)
  }

  return (
    <div className="">
      <div className="herobgImg lg:h-[60vh] h-[40vh] lg:space-y-3 space-y-2 text-white lg:px-[8.5rem] px-5 lg:py-20 py-14">
        <h2 className='lg:text-2xl text-lg font-semibold'>Find Your Perfect Stay</h2>
        <h1 className='lg:text-5xl text-3xl font-bold lg:w-[500px]'>Make Your Dream Getaway a Reality</h1>
        <h2 className='lg:text-xl text-lg font-semibold'>Embrace Luxury, Elegance and Comfort</h2>
      </div>
      <div className='max-w-6xl mx-auto lg:mt-[-50px] mt-[-100px] px-4 sm:px-6 lg:px-8 py-5'>
        {/* <h2 className='text-[#191e3b] mb-5 dark:text-white lg:text-4xl text-xl font-semibold'>Where to?</h2> */}
        <div className="flex items-center justify-between gap-1 p-1 rounded-lg bg-yellow-500 lg:flex-row flex-col">
          <div className="w-full bg-white rounded-md">
            <div className=" rounded-lg flex gap-3 p-3 py-4 lg:w-[300px] w-full">
              <MapPin className='text-gray-600' />
              <input 
                type="text" 
                className='bg-transparent outline-none w-full dark:text-black border-none outlne-none  ' 
                placeholder='Where to?' 
              />
            </div>
          </div>
          <div className="w-full">
            <StayDuration/>
          </div>
          <div className="relative w-full bg-white rounded-md">
            <div 
              onClick={ () => setShowRoomInfo(true)}
              className="cursor-pointer  rounded-lg flex gap-3 p-3 py-4 lg:w-[300px] w-full">
                <User2 className='text-sm text-gray-600' />
                <div className="flex gap-4 text-sm dark:text-black items-center">
                  <p>Adults: <span className='font-bold'>{adults}</span></p>
                  <p>Children: <span className='font-bold'>{children}</span></p>
                  <p>Rooms: <span className='font-bold'>{room}</span></p>
                </div>
            </div>

            {showRoomInfo && 
              <RoomInfo 
                closeRoomInfo={closeRoomInfo}
                addRoom={addRoom}
                addAdults={addAdults}
                addChild={addChild}
                subtractRoom={subtractRoom}
                subtractAdults={subtractAdults}
                subtractChild={subtractChild}
                room={room}
                children={children}
                adults={adults}
              />
            }
            
          </div>
          <motion.button 
            className='rounded-md hover:scale-105 dark:bg-blue-600 w-full bg-blue-900 text-white px-5 py-4 hover:to-blue-950 flex items-center justify-between'
            whileTap={{ scale: 0.9 }}
            >
              Search
              <Search size={20}/>
            </motion.button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
