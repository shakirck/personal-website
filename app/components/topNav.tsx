"use client"
// Import required dependencies
import React, { useEffect } from 'react'
import Image from 'next/image'
import Navbar from './navbar'
import { HoverButton } from '../util/hover'

export default function TopNav() {
  
  const logoElRef = React.useRef(null)
  
  useEffect(() => {
    const logoEl = logoElRef.current
    if (logoEl) {
      new HoverButton(logoEl)
    }
  }, [])
  
  return (
    <div className='main-nav'>
      <Image src='/logodark/logoround.svg' alt='Company logo' width={50} height={50} ref={logoElRef} />
      <Navbar />
    </div>
  )
}
