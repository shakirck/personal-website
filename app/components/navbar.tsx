import React, { useEffect, useRef, useState } from 'react'
import '../styles/hamburgers.css'
export default function Navbar() {
  const [isActive, setActive] = useState(false);
  return (
    <nav className='navbar'>
      <button className={`disabled-btn hamburger hamburger--collapse ${isActive? "is-active":""}`} type="button"  onClick={() => setActive(!isActive)} >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <ul 

      className={`${isActive? "":"display-none"}`}

      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/posts">Blogs</a>
        </li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </nav>)
}
