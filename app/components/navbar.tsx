import { useEffect, useState } from 'react';
import '../styles/hamburgers.css';

export default function Navbar() {
  const [state, setState] = useState({
    isActive: false,
    resumeUrl: '',
  });

  useEffect(() => {
    async function getResumeFromContentful() {
      try {
        const data = await fetch('/api/resume', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const resume = await data.json();
        setState((prevState) => ({ ...prevState, resumeUrl: resume.url }));
      } catch (error) {
        console.log(error)
      }
    }
    getResumeFromContentful();
  }, []);

  const toggleMenu = () => {
    setState((prevState) => ({ ...prevState, isActive: !prevState.isActive }));
  };

  return (
    <nav className="navbar">
      <button
        className={`disabled-btn hamburger hamburger--collapse ${state.isActive ? 'is-active' : ''}`}
        type="button"
        onClick={toggleMenu}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <ul className={`${state.isActive ? '' : 'display-none'}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/posts">Blogs</a>
        </li>
        <li>Projects</li>
        <li>
          <a href={state.resumeUrl} target="_blank">
            Resume
          </a>
        </li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
