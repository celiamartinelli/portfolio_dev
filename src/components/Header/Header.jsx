import { useState, useEffect } from 'react';

import './Header.scss';

export default function Header() {
  const [activeLink, setActiveLink] = useState('a');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Observer pour détecter si la barre de navigation est visible
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsScrolled(entry.isIntersecting);
        },
        { threshold: [1] }
      );

      // Parcours de tous les liens de la barre de navigation pour observer chaque lien
      const navLinks = document.querySelectorAll('a');
      navLinks.forEach((link) => observer.observe(link));

      // Parcours de toutes les sections pour détecter quelle section est visible
      const sections = document.querySelectorAll('div[id]');
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveLink(section.id);
        }
      });
    };

    // Écouteur d'événements pour le défilement de la fenêtre
    window.addEventListener('scroll', handleScroll);

    // Nettoyage des écouteurs d'événements lors du démontage du composant
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <button
        className="fixed z-10 p-4 text-xl rounded-full"
        type="button"
        onClick={() => {
          setActiveLink('logo');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <img src="/CM.png" alt="Logo" className="w-12 h-12 rounded-full" />
      </button>

      <nav
        className={`fixed z-10 mt-4 p-4 left-1/2 transform -translate-x-1/2 text-xl w-full md:w-auto  ${
          isScrolled ? 'bg-white bg-opacity-50 backdrop-blur-md ' : ''
        } md:top-0 bottom-0 md:bottom-auto md:rounded-full`}
      >
        {' '}
        <ul className="flex justify-around ">
          <li>
            <a
              href="#portfolio"
              onClick={() => setActiveLink('home')}
              className={`p-2 rounded-full ${
                activeLink === 'portfolio' ? 'bg-white  bg-opacity-50' : ''
              }`}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setActiveLink('about')}
              className={`p-2 rounded-full ${
                activeLink === 'about' ? 'bg-white bg-opacity-50' : ''
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setActiveLink('contact')}
              className={`p-2 rounded-full ${
                activeLink === 'contact' ? 'bg-white bg-opacity-50' : ''
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
