import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Sale from '../components/SaleLimited/Sale'

const Fashion = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className='mt-10'>
        <Sale/>
        </div>
    

              </div>
  )
}

export default Fashion