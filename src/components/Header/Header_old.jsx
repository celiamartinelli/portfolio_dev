import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export default function Header() {
  const [activeLink, setActiveLink] = useState('a');
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [textColor, setTextColor] = useState('black');

  useEffect(() => {
    const handleScroll = () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsScrolled(entry.isIntersecting);
        },
        { threshold: [1] }
      );

      const navLinks = document.querySelectorAll('a');
      navLinks.forEach((link) => observer.observe(link));

      const sections = document.querySelectorAll('div[id]');
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setTextColor(darkMode ? 'white' : 'black');
  }, [darkMode]);

  return (
    <div className="relative" style={{ color: textColor }}>
      <button
        className="fixed z-10 p-4 text-xl rounded-full"
        type="button"
        onClick={() => {
          setActiveLink('logo');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <Link to="/">
          <img
            src="/logoCM-vert.png"
            alt="Logo"
            className="w-12 h-12 rounded-full shadow-md"
          />
        </Link>
      </button>

      <nav
        className={`fixed z-10 mt-4 p-4 left-1/2 transform -translate-x-1/2 text-xl w-full md:w-auto  ${
          isScrolled ? 'bg-white bg-opacity-50 backdrop-blur-md ' : ''
        } md:top-0 bottom-0 md:bottom-auto md:rounded-full`}
      >
        {' '}
        <ul className="flex justify-around ">
          <li>
            <Link
              to="/#portfolio"
              onClick={() => setActiveLink('home')}
              className={`p-2 rounded-full ${
                activeLink === 'portfolio' ? 'bg-white  bg-opacity-50' : ''
              }`}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/#about"
              onClick={() => setActiveLink('about')}
              className={`p-2 rounded-full ${
                activeLink === 'about' ? 'bg-white bg-opacity-50' : ''
              }`}
            >
              A Propos
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              onClick={() => setActiveLink('contact')}
              className={`p-2 rounded-full ${
                activeLink === 'contact' ? 'bg-white bg-opacity-50' : ''
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="text-2xl p-2 flex flex-row-reverse right-6 top-5 fixed z-20 ">
        <LanguageSwitcher />
        <button
          className="mx-2"
          type="button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </div>
  );
}
