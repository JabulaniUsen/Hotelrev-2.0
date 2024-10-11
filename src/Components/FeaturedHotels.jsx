import React from 'react'
import hoteImg from '../assets/hero1.jpg'

function FeaturedHotels() {

    const hotelList = [
        { 
            id: 1, 
            name: 'Marriot Bon-Voyage', 
            location: 'Ikeja, Lagos, Nigeria', 
            rating: 8.6, 
            reviews: '8,214', 
            newPrice: '$350', 
            oldPrice: '$470',
            image: hoteImg
        },
        { 
            id: 2, 
            name: 'Marriot Bon-Voyage', 
            location: 'Ikeja, Lagos, Nigeria', 
            rating: 7.6, 
            reviews: '8,214', 
            newPrice: '$350', 
            oldPrice: '$470',
            image: hoteImg
        },
        { 
            id: 3, 
            name: 'Marriot Bon-Voyage', 
            location: 'Ikeja, Lagos, Nigeria', 
            rating: 6, 
            reviews: '8,214', 
            newPrice: '$350', 
            oldPrice: '$470',
            image: hoteImg
        },
        { 
            id: 4, 
            name: 'Marriot Bon-Voyage', 
            location: 'Ikeja, Lagos, Nigeria', 
            rating: 8.6, 
            reviews: '8,214', 
            newPrice: '$350', 
            oldPrice: '$470',
            image: hoteImg
        },
        { 
            id: 5, 
            name: 'Marriot Bon-Voyage', 
            location: 'Ikeja, Lagos, Nigeria', 
            rating: 8.6, 
            reviews: '8,214', 
            newPrice: '$350', 
            oldPrice: '$470',
            image: hoteImg
        },
        { 
            id: 6, 
            name: 'Marriot Bon-Voyage', 
            location: 'Ikeja, Lagos, Nigeria', 
            rating: 8.6, 
            reviews: '8,214', 
            newPrice: '$350', 
            oldPrice: '$470',
            image: hoteImg
        },
    ]

  return (
    <div className='py-10 pt-20 max-w-6xl mx-auto'>
        <div className="space-y-2">
            <h1 className='lg:text-5xl text-3xl font-semibold'>Travellers choice</h1>
            <h3 className='text-xl'>Top picks by travellers world wide</h3>
        </div>
        <div className="flex overflow-auto gap-7 mt-7">
            {hotelList.map((item) => ( 
                <div key={item.id}>
                    <div className="shadow-lg border w-[300px] rounded-lg cursor-pointer">
                        <img src={item.image} className='rounded-t' alt="" />
                        <div className="p-3">
                            <p className='font-bold text-xl'>{item.name}</p>
                            <p className='text-sm'>{item.location}</p>
                            <div className="mt-2 flex items-center gap-1">
                                <p className='font-semibold'>
                                    <span className='p-1 px-2 text-xs rounded text-white bg-blue-700 shadow-inner'>{item.rating}</span>
                                    {` ${item.rating >= 8 ? 'Excellent' : item.rating >= 7 ? 'Good' : 'Fair' }`}
                                </p>
                                <p>-</p>
                                <p className='text-sm'>{item.reviews} Reviews</p>
                            </div>

                            <div className="price flex gap-3 items-center justify-end mt-10">
                                <p className='text-gray-600 line-through'>{item.oldPrice}</p>
                                <p className='text-xl font-semibold'>{item.newPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturedHotels
