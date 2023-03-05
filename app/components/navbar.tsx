import { useEffect, useState } from 'react';
import '../styles/hamburgers.css';
import * as contentful from 'contentful';

export default function Navbar() {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;
  const [state, setState] = useState({
    isActive: false,
    resumeUrl: '',
  });

  useEffect(() => {
    async function getResumeFromContentful() {
      try {
        const client = contentful.createClient({
          space: CONTENTFUL_SPACE_ID || '',
          accessToken: CONTENTFUL_ACCESS_TOKEN || '',
        });
        const data = await client.getAsset('3Y7zLT4VYnlKxoIYOWpKBf');
        const resumeUrl = data?.fields?.file?.url ?? '';
        setState((prevState) => ({ ...prevState, resumeUrl }));
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
