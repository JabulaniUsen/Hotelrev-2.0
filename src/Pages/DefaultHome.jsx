import React from 'react'
import DiscoveryStay from '../Components/DiscoveryStay'
import PopularDestinations from '../Components/PopularDestinations'
import HeroSection from '../Components/HeroSection'
import Partners from '../Components/Partners'
import Offers from '../Components/offers'
import FeaturedHotels from '../Components/FeaturedHotels'

function DefaultHome() {
  return (
    <div>
        <HeroSection/>
        <div className="px-5">
            <DiscoveryStay/>
            <PopularDestinations/>
            <Partners/>
            <Offers/>
            <FeaturedHotels/>
        </div>
    </div>
  )
}

export default DefaultHome
