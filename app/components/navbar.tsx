import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
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
