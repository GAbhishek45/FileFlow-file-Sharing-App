import React from 'react'
import Navbar from './Navbar'
import Hero2 from './Hero2'
import { UserButton } from '@clerk/clerk-react'
import Navbar2 from './Navbar2'

export const Model = () => {
  return (
    <div>
        <Navbar2 />
        {/* <UserButton /> */}
        <Hero2 />
    </div>
  )
}
