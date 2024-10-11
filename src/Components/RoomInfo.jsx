import React, {useState} from 'react'
import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react'

function RoomInfo({ 
    room,
    adults,
    children,
    closeRoomInfo, 
    addRoom, 
    addAdults, 
    addChild,
    subtractRoom, 
    subtractAdults, 
    subtractChild 
}) {


    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.5
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }
  return (
    <motion.div 
    variants={container}
    initial="hidden"
    animate="show"
        className="absolute shadow-lg backdrop-blur-md bg-white/10 lg:w-[350px] w-full z-50 border p-5 rounded-lg dark:border-gray-100 border-gray-400 bg mt-2 space-y-3">
            <div className="flex items-center justify-between">
              <p className='text-sm'>Rooms:</p>
              <div className="flex items-center gap-5">
                    <motion.button
                     onClick={subtractRoom}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.1 },
                      }}
                      whileTap={{ scale: 1.0 }} 
                      className='border p-2 rounded-full hover:bg-blue-900 hover:border-none hover:text-white border-gray-500'>
                      <Minus size={18}/>
                    </motion.button>
                <span  className='font-semibold'>{room}</span>
                <motion.button
                  onClick={addRoom}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.1 },
                  }}
                  whileTap={{ scale: 1.0 }} 
                  className='border p-2 rounded-full hover:bg-blue-900 hover:border-none hover:text-white border-gray-500'>
                  <Plus size={18}/>
                </motion.button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className='text-sm'>Adults:</p>
              <div className="flex items-center gap-5">
                    <motion.button
                      onClick={subtractAdults}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.1 },
                      }}
                      whileTap={{ scale: 1.0 }} 
                      className='border p-2 rounded-full hover:bg-blue-900 hover:border-none hover:text-white border-gray-500'>
                      <Minus size={18}/>
                    </motion.button>
                <span  className='font-semibold'>{adults}</span>
                <motion.button
                  onClick={addAdults}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.1 },
                  }}
                  whileTap={{ scale: 1.0 }} 
                  className='border p-2 rounded-full hover:bg-blue-900 hover:border-none hover:text-white border-gray-500'>
                  <Plus size={18}/>
                </motion.button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className='text-sm'>Children:</p>
              <div className="flex items-center gap-5">
                    <motion.button
                      onClick={subtractChild}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.1 },
                      }}
                      whileTap={{ scale: 1.0 }} 
                      className='border p-2 rounded-full hover:bg-blue-900 hover:border-none hover:text-white border-gray-500'>
                      <Minus size={18}/>
                    </motion.button>
                <span  className='font-semibold'>{children}</span>
                <motion.button
                  onClick={addChild}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.1 },
                  }}
                  whileTap={{ scale: 1.0 }} 
                  className='border p-2 rounded-full hover:bg-blue-900 hover:border-none hover:text-white border-gray-500'>
                  <Plus size={18}/>
                </motion.button>
              </div>
            </div>
            <hr />
            <motion.button
                onClick={closeRoomInfo} 
              className='rounded-lg border mt-5 border-blue-900 dark:bg-blue-600 dark:text-white text-blue-900 px-5 py-2 w-full hover:bg-blue-600 hover:text-white font-semibold hover:border-0'
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 1.0 }}
              >
                Done
            </motion.button>
          </motion.div>
  )
}

export default RoomInfo
