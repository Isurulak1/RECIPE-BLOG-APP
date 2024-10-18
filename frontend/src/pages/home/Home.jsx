import React from 'react'
import Hero from '../../components/Hero'
import CategoryWrapper from '../categoy/CategoryWrapper'
import FeaturedSection from './FeaturedSection'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center w-full py-20'>
        <Hero />
        <CategoryWrapper />
      </div>

      
      {/* others components */}
      <FeaturedSection />
    </div>
  )
}

export default Home