import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useDarkMode } from '../App/DarkModeContext';

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export default function Header() {
  const [activeLink, setActiveLink] = useState('a');
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const { t } = useTranslation();
  return (
    <div className="relative">
      <button
        className="fixed z-10 p-4 text-xl rounded-full"
        type="button"
        onClick={() => {
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
      <nav className="fixed z-10 mt-4 p-4 left-1/2 transform -translate-x-1/2 text-xl w-full md:w-auto md:top-0 bottom-0 md:bottom-auto md:rounded-full bg-white bg-opacity-50 backdrop-blur-md ">
        <ul className="flex justify-around ">
          <Link
            to="/#home"
            onClick={() => setActiveLink('home')}
            className={`mx-1 p-2 rounded-full ${
              activeLink === 'home' ? 'bg-white  bg-opacity-50' : ''
            } hover:bg-white hover:bg-opacity-75 hover:animate-background-fade`}
          >
            {t('header.home')}
          </Link>
          <Link
            to="/#portfolio"
            onClick={() => setActiveLink('portfolio')}
            className={`mx-1 p-2 rounded-full ${
              activeLink === 'portfolio' ? 'bg-white  bg-opacity-50' : ''
            } hover:bg-white hover:bg-opacity-75 hover:animate-background-fade`}
          >
            {t('header.portfolio')}
          </Link>
          <Link
            to="/#about"
            onClick={() => setActiveLink('about')}
            className={`mx-1 p-2 rounded-full ${
              activeLink === 'about' ? 'bg-white  bg-opacity-50' : ''
            } hover:bg-white hover:bg-opacity-75 hover:animate-background-fade`}
          >
            {t('header.about')}
          </Link>
          <Link
            to="/#contact"
            onClick={() => setActiveLink('contact')}
            className={`mx-1 p-2 rounded-full ${
              activeLink === 'contact' ? 'bg-white  bg-opacity-50' : ''
            } hover:bg-white hover:bg-opacity-75 hover:animate-background-fade`}
          >
            {t('header.contact')}
          </Link>
        </ul>
      </nav>
      <div className="text-2xl p-2 flex flex-row-reverse right-6 top-5 fixed z-20 ">
        <LanguageSwitcher />
        <button
          className="mx-2"
          type="button"
          onClick={() => setIsDarkMode((prevMode) => !prevMode)}
        >
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </div>
  );
}
