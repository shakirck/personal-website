"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import Navbar from './navbar'
import { HoverButton } from '../util/hover'
export default function topNav() {
    const logoElRef = React.useRef(null)
     useEffect(() => {
      const logoEl = logoElRef.current
      if(logoEl){
        new HoverButton(logoEl)
      }
    }, [])
  return (
    <div className='main-nav '>
        <Image src='/logodark/logoround.svg' alt='' width={50} height={50}    />
        <Navbar />
      </div>
  )
}
