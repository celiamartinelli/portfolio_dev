import { useState, useEffect, useRef, useMemo } from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import { useTranslation } from 'react-i18next';

import { useTypewriter, Cursor } from 'react-simple-typewriter';
// import {
//   FaCss3Alt,
//   FaGit,
//   FaGithub,
//   FaHtml5,
//   FaJsSquare,
//   FaNodeJs,
//   FaReact,
//   FaSlack,
// } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
// import {
//   SiEjs,
//   SiExpo,
//   SiExpress,
//   SiNotion,
//   SiPostgresql,
//   SiRedux,
//   SiSequelize,
//   SiStrapi,
//   SiSupabase,
//   SiTailwindcss,
// } from 'react-icons/si';
import DarkModeContext from '../../../styles/DarkModeContext';
import './HomePage.scss';
// import Form from '../../Form/Form';
// import projectDataFR from '../../../config/projectDataFR.json';
import Footer from '../../Footer/Footer';
import { useDarkMode } from '../../App/DarkModeContext';
import Insert from '../../Insert/Insert';

import Portfolio from '../../Section/Portfolio';
import About from '../../Section/About';
import Contact from '../../Section/Contact';

export default function HomePage() {
  const [vantaEffect, setVantaEffect] = useState(null);
  // const [darkMode, setDarkMode] = useState(false);
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const [textColor, setTextColor] = useState('black');
  const myRef = useRef(null);
  const vantaRef = useRef(null);
  const { t, i18n } = useTranslation();
  const words = t('portfolio.qualities', { returnObjects: true }) || [];
  const [text] = useTypewriter({
    words: words || [],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  // const technologiesFront = isDarkMode
  //   ? '../../assets/project/technologies/front-end-dark.png'
  //   : '../../assets/project/technologies/front-end.png';

  // const technologiesBack = isDarkMode
  //   ? '../../assets/project/technologies/back-end-dark.png'
  //   : '../../assets/project/technologies/back-end.png';

  // const technologiesManage = isDarkMode
  //   ? '../../assets/project/technologies/project-management-dark.png'
  //   : '../../assets/project/technologies/project-management.png';

  const scrollIcon = isDarkMode
    ? '../../assets/scroll_nigth.png'
    : '../../assets/scroll_ligth.png';

  const location = useLocation();

  useEffect(() => {
    const anchorId = location.hash.replace('#', '');
    if (anchorId) {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location]);

  // const projects = useMemo(() => {
  //   const data = t('portfolio.projects', { returnObjects: true });
  //   // console.log('Projects Data:', data);
  //   return Array.isArray(data) ? data : [];
  // }, [t]);

  // Helper function to interpolate between two colors
  const interpolateColor = (color1, color2, factor) => {
    const result = color1
      .slice(1)
      .match(/.{2}/g)
      .map((hex, i) => {
        const v1 = parseInt(hex, 16);
        const v2 = parseInt(color2.slice(1).match(/.{2}/g)[i], 16);
        const val = Math.round(v1 + factor * (v2 - v1))
          .toString(16)
          .padStart(2, '0');
        return val;
      });
    return `#${result.join('')}`;
  };

  // Function to smoothly transition Vanta colors
  const transitionVantaColors = (duration) => {
    const steps = 30; // Number of steps in the transition
    const intervalTime = duration / steps;
    let currentStep = 0;

    const initialColors = {
      highlightColor: isDarkMode ? '#c4cdfc' : '#4859aa',
      midtoneColor: isDarkMode ? '#96ffff' : '#479696',
      lowlightColor: isDarkMode ? '#71ff81' : '#157021',
      baseColor: isDarkMode ? undefined : '#000000',
    };

    const targetColors = {
      highlightColor: isDarkMode ? '#4859aa' : '#c4cdfc',
      midtoneColor: isDarkMode ? '#479696' : '#96ffff',
      lowlightColor: isDarkMode ? '#157021' : '#71ff81',
      baseColor: isDarkMode ? '#000000' : undefined,
    };

    const updateColors = () => {
      const factor = currentStep / steps;
      vantaRef.current.setOptions({
        highlightColor: interpolateColor(
          initialColors.highlightColor,
          targetColors.highlightColor,
          factor
        ),
        midtoneColor: interpolateColor(
          initialColors.midtoneColor,
          targetColors.midtoneColor,
          factor
        ),
        lowlightColor: interpolateColor(
          initialColors.lowlightColor,
          targetColors.lowlightColor,
          factor
        ),
        baseColor: targetColors.baseColor,
      });
      currentStep += 1;
      if (currentStep <= steps) {
        setTimeout(updateColors, intervalTime);
      }
    };

    updateColors();
  };

  useEffect(() => {
    if (myRef.current) {
      if (vantaRef.current) vantaRef.current.destroy();

      vantaRef.current = FOG({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: isDarkMode ? 0x4859aa : 0xc4cdfc,
        midtoneColor: isDarkMode ? 0x479696 : 0x96ffff,
        lowlightColor: isDarkMode ? 0x157021 : 0x71ff81,
        baseColor: isDarkMode ? 0x0 : undefined,
        blurFactor: 0.9,
        speed: 4,
        zoom: 1,
      });

      setVantaEffect(vantaRef.current);

      return () => {
        if (vantaRef.current) vantaRef.current.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (vantaRef.current) {
      transitionVantaColors(1000); // Smooth transition over 1 second
    }
  }, [isDarkMode]);

  const contextValue = useMemo(
    () => ({ isDarkMode, setIsDarkMode, textColor, setTextColor }),
    [isDarkMode, setIsDarkMode, textColor]
  );

  useEffect(() => {
    setTextColor(isDarkMode ? 'white' : 'black');
  }, [isDarkMode]);

  const playSoundDownload = () => {
    const audio = new Audio('../../../public/audio/music-note-download.mp3');
    audio.play();
  };

  const cvFile =
    i18n.language === 'fr'
      ? '/assets/celia_martinelli_CV.pdf'
      : '/assets/celia_martinelli_CV_en.pdf';

  return (
    <div className="relative w-screen h-screen">
      <div
        ref={myRef}
        className="animation display flex flex-col justify-center min-h-screen pb-28"
      >
        <DarkModeContext.Provider value={contextValue}>
          <div id="home">
            <div className="overflow-hidden min-h-screen">
              <div className="text-lg mt-36 text-center my-10">
                <h1 className="text-4xl my-2 tracking-wide">
                  {t('home.title')}
                </h1>
                <h2 className="text-2xl tracking-wide">{t('home.subtitle')}</h2>
                <div className="my-2">
                  <h1 className="text-4xl">
                    {t('home.iam')} <span>{text}</span>
                    <Cursor cursorColor="green" />
                  </h1>
                </div>
                <p className="mt-8 w-4/6 mx-auto">{t('home.com')}</p>
                <p className="mt-8 w-4/6 mx-auto">{t('home.com2')}</p>
                <p className="mt-8 w-4/6 mx-auto">{t('home.goal')}</p>
              </div>
              <div className="text-center ">
                <button onClick={playSoundDownload} type="button">
                  <a
                    href={cvFile}
                    download={cvFile.split('/').pop()}
                    className="flex items-center justify-center border-2 bg-white bg-opacity-30 dark:bg-opacity-30 dark:border-darkBG border-lightMint px-8 py-2 rounded-2xl shadow-lg hover:group bg-gradient-to-br hover:from-teal-300 hover:to-lime-300 dark:text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:animate-background-fade active:animate-press dark:hover:group dark:bg-gradient-to-br dark:hover:from-rose-500 dark:hover:to-orange-400"
                  >
                    {t('home.button1')}
                  </a>
                </button>
              </div>
              <Insert />
              <div>
                <img
                  className="items-center justify-center w-16 h-16 mx-auto animate-bounce mt-10"
                  src={scrollIcon}
                  alt="scroll-down"
                />
              </div>
            </div>

            <div className="w-11/12 md:w-5/6 mx-auto">
              <Portfolio />
              <About />
              <Contact />
            </div>
          </div>

          <Footer />
        </DarkModeContext.Provider>
      </div>
    </div>
  );
}
