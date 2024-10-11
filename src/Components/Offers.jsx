import React from 'react'
import holidayImg from '../assets/hero1.jpg'

function Offers() {

    const offerList = [
        { tag: 'Vacation', name: 'Trip to Togo', subtext: 'Stress free group travel', image: holidayImg },
        { tag: 'Vacation', name: '3 days at Obudu', subtext: 'Stress free group travel', image: holidayImg },
        { tag: 'Vacation', name: 'Qatar group travel', subtext: 'Stress free group travel', image: holidayImg },
        // { tag: 'Vacation', name: 'Trip to Togo', subtext: 'Stress free group travel', image: holidayImg },
        // { tag: 'Vacation', name: 'Trip to Togo', subtext: 'Stress free group travel', image: holidayImg },
        // { tag: 'Vacation', name: 'Trip to Togo', subtext: 'Stress free group travel', image: holidayImg },
    ]

  return (
    <div className='py-10 pt-20 max-w-6xl mx-auto'>
        <div className="space-y-2">
            <h1 className='lg:text-5xl text-3xl font-semibold'>Limited offers</h1>
            <h3 className='text-xl'>Promotions, deals, and special offer just for you by Alpha Cruise</h3>
        </div>
        <div className="flex gap-5 overflow-auto my-5">
            {offerList.map((item, index) => (
            <div 
                key={index}
                className=" border rounded border-gray-300 shadow-lg flex gap-4 items-center justify-between p-3 ">
                    <div className="">
                        <p className='text-xs dark:text-gray-400'>{item.tag}</p>
                        <h2 className='text-xl font-semibold dark:text-gray-200'>{item.name}</h2>
                        <p className='dark:text-gray-400 text-sm'>{item.subtext}</p>
                        <button className='bg-blue-600 text-white hover:bg-blue-800 px-2 py-1 rounded shadow-inner mt-2'>Get started</button>
                    </div>      
                    <div className="w-[200px]">
                        <img src={item.image} alt="" />
                    </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Offers


{/* <div className="space-y-2">
            <h1 className='lg:text-5xl text-3xl font-semibold'>Limited offers</h1>
            <h3 className='text-xl'>Promotions, deals, and special offer just for you by Alpha Cruise</h3>
        </div>
        <div className="flex gap-5 overflow-auto my-5">
            {offerList.map((item, index) => (
            <div 
                key={index}
                className=" border rounded border-blue-900 shadow-lg flex gap-4 items-center justify-between p-3 ">
                    <div className="">
                        <p className='text-xs dark:text-gray-400'>{item.tag}</p>
                        <h2 className='text-xl font-semibold dark:text-gray-200'>{item.name}</h2>
                        <p className='dark:text-gray-400 text-sm'>{item.subtext}</p>
                        <button className='bg-blue-600 text-white hover:bg-blue-800 px-2 py-1 rounded shadow-inner mt-2'>Get started</button>
                    </div>      
                    <div className="w-[200px]">
                        <img src={item.image} alt="" />
                    </div>
            </div>
            ))}
        </div> */}