"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { HoverButton } from '../util/hover'

export default function SocialIcons() {
    useEffect(() => {
        const githubIcon = document.querySelector('.social-left li')
        const linkedinIcon = document.querySelector('.social-left li:nth-child(2)')
        const mailIcon = document.querySelector('.social-left li:nth-child(3)')
        if(githubIcon && linkedinIcon && mailIcon){
            new HoverButton(githubIcon)
            new HoverButton(linkedinIcon)
            new HoverButton(mailIcon)
        }
    }
    )
  return (
    <ul className='social-left'>
    <li>
    <a href="https://www.github.com/shakirck" target="_blank">
         <Image src='/social/github.svg' alt='' width={30} height={30} />
     </a>
    </li>

    <li>
    <a href="https://www.linkedin.com/in/muhammedshakirck/" target="_blank">
         <Image src='/social/linkedin.svg' alt='' width={30} height={30}  />
     </a>
    </li>

    <li>
    <a href="mailto:shakirck333@gmail.com">
         <Image src='/social/Mail.svg' alt='' width={30} height={30} />
     </a>
    </li>

    
 </ul>  )
}
