import { useState, useEffect, useRef, useMemo } from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import { useTranslation } from 'react-i18next';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaSlack,
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import {
  SiEjs,
  SiExpo,
  SiExpress,
  SiNotion,
  SiPostgresql,
  SiRedux,
  SiSequelize,
  SiStrapi,
  SiSupabase,
  SiTailwindcss,
} from 'react-icons/si';
import DarkModeContext from '../../../styles/DarkModeContext';
import './HomePage.scss';
import Form from '../../Form/Form';
// import projectDataFR from '../../../config/projectDataFR.json';
import Footer from '../../Footer/Footer';
import { useDarkMode } from '../../App/DarkModeContext';
import Insert from '../../Insert/Insert';

export default function HomePage() {
  const [vantaEffect, setVantaEffect] = useState(null);
  // const [darkMode, setDarkMode] = useState(false);
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const [textColor, setTextColor] = useState('black');
  const myRef = useRef(null);
  const vantaRef = useRef(null);
  const { t } = useTranslation();
  const words = t('portfolio.qualities', { returnObjects: true }) || [];
  const [text] = useTypewriter({
    words: words || [],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  const technologiesFront = isDarkMode
    ? '../../assets/project/technologies/front-end-dark.png'
    : '../../assets/project/technologies/front-end.png';

  const technologiesBack = isDarkMode
    ? '../../assets/project/technologies/back-end-dark.png'
    : '../../assets/project/technologies/back-end.png';

  const technologiesManage = isDarkMode
    ? '../../assets/project/technologies/project-management-dark.png'
    : '../../assets/project/technologies/project-management.png';

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

  const projects = useMemo(() => {
    const data = t('portfolio.projects', { returnObjects: true });
    // console.log('Projects Data:', data);
    return Array.isArray(data) ? data : [];
  }, [t]);

  const technologies = {
    frontEnd: [
      { name: 'React', icon: <FaReact /> },
      { name: 'React Native', icon: <FaReact /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      { name: 'Redux', icon: <SiRedux /> },
    ],
    backEnd: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Supabase', icon: <SiSupabase /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'Strapi', icon: <SiStrapi /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Sequelize', icon: <SiSequelize /> },
      { name: 'EJS', icon: <SiEjs /> },
    ],
    projectManagement: [
      { name: 'Expo', icon: <SiExpo /> },
      { name: 'Notion', icon: <SiNotion /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Git', icon: <FaGit /> },
      { name: 'Slack', icon: <FaSlack /> },
    ],
  };

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
        speed: 1.3,
        zoom: 0.8,
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

  return (
    <div className="relative w-screen h-screen">
      <div
        ref={myRef}
        className="animation display flex flex-col justify-center min-h-screen pb-28"
      >
        <DarkModeContext.Provider value={contextValue}>
          <div id="home">
            <div className="overflow-hidden h-screen">
              <div className="text-lg mt-36 text-center my-10">
                <h1 className="text-4xl my-4 tracking-wide">
                  {t('home.title')}
                </h1>
                <h2 className="text-2xl tracking-wide">{t('home.subtitle')}</h2>
                <div className="my-5">
                  <h1 className="text-4xl">
                    {t('home.iam')} <span>{text}</span>
                    <Cursor cursorColor="green" />
                  </h1>
                </div>
                <p className="mt-12 w-5/6 mx-auto">{t('home.com')}</p>
              </div>
              <div className="text-center p-4 ">
                <button type="button">
                  <a
                    href="/assets/celia_martinelli_CV.pdf"
                    download="celia_martinelli_CV.pdf"
                    className="flex items-center justify-center border-2 bg-white bg-opacity-30 dark:bg-opacity-30 dark:border-lightButtonNav border-lightMint px-8 py-2 rounded-2xl shadow-lg hover:group bg-gradient-to-br hover:from-teal-300 hover:to-lime-300 dark:text-white dark:hover:text-gray-900 transition-transform duration-300 ease-in-out hover:scale-105 hover:animate-background-fade active:animate-press"
                  >
                    {t('home.button1')}
                  </a>
                </button>
              </div>
              <Insert />
            </div>

            <div className="w-5/6 mx-auto">
              <div
                id="portfolio"
                className=" bg-white bg-opacity-50 rounded-2xl p-7 m-5"
              >
                <h2 className="text-2xl font-bold text-center mb-3">
                  {t('portfolio.title')}
                </h2>
                <p className="text-center mb-4">{t('portfolio.paraph')}</p>
                <div>
                  <h2 className="text-center font-bold mb-4">
                    {t('portfolio.title2')}
                  </h2>
                  <p className="text-center"> {t('portfolio.p2')}</p>
                  <div className="flex justify-center ">
                    <ul className="flex flex-col flex-wrap justify-center sm:flex-row">
                      {projects.map((project) => (
                        <div
                          key={project.id}
                          className="relative flex justify-center m-4 p-4 rounded-lg shadow-xl bg-white bg-opacity-50 sm:w-3/12 transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-white  hover:bg-opacity-75 hover:m-6"
                        >
                          <Link
                            to={`/project/${project.id}`}
                            className="text-blue-500 mt-2 block "
                            data-id={project.id}
                          >
                            <h3 className="text-xl font-semibold text-center">
                              {project.title}
                            </h3>

                            <img
                              src={project.img}
                              alt={project.title}
                              className="w-20 h-20 mx-auto"
                            />
                            <p className=" mt-2 text-center ">
                              {project.titleDescription}
                            </p>
                          </Link>
                        </div>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-center"> {t('portfolio.p3')}</p>
                  </div>
                </div>
              </div>
              <div
                id="about"
                className=" bg-white bg-opacity-50 rounded-2xl p-7 m-5"
              >
                <h2 className="text-4xl font-bold text-center">
                  {t('about.title')}
                </h2>
                <p className="text-center">{t('about.paraph')}</p>
                <div>
                  <h2 className="text-center font-bold">
                    {t('about.softSkill')}
                  </h2>
                  <ul className="flex flex-wrap justify-center">
                    {t('portfolio.softSkills', { returnObjects: true }).map(
                      (skill) => (
                        <li
                          className="bg-vertFonce1 text-black dark:text-white dark:bg-darkBlue py-1 px-2 rounded-md m-1 shadow-md"
                          key={skill}
                        >
                          {skill}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <h2 className="text-center text-4xl">{t('about.hardTitle')}</h2>
                <div>
                  <h2 className="text-center font-bold">
                    {t('about.hardSkill')}
                  </h2>
                  <div className="border-x-2 border-t-2  rounded-t-lg p-8">
                    <div className="flex flex-col justify-center items-center">
                      <div className=" p-4 rounded-full bg-lightTag dark:bg-darkBlue transition-colors duration-500 shadow-md mt-1">
                        <img
                          className="w-16 h-16"
                          src={technologiesFront}
                          alt="front-end"
                        />
                      </div>
                      <h3 className="text-center font-semibold text-3xl">
                        {t('about.hardsubTitle1')}
                      </h3>
                    </div>

                    <ul className="flex flex-wrap justify-center w-5/6 lg:w-4/6 items-center mx-auto mt-6">
                      {technologies.frontEnd.map((tech) => (
                        <li
                          key={tech.name}
                          className="flex items-center mr-2 py-1 px-2 dark:text-black m-1 rounded-md shadow-md  bg-white bg-opacity-50"
                        >
                          {tech.icon}
                          <span className="mx-1">{tech.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-2 p-8">
                    <div className="flex flex-col justify-center items-center">
                      <div className=" p-4 rounded-full bg-lightTag dark:bg-darkBlue transition-colors duration-500 shadow-md mt-1">
                        <img
                          className="w-16 h-16"
                          src={technologiesBack}
                          alt="back-end"
                        />
                      </div>
                      <h3 className="text-center font-semibold text-3xl">
                        {t('about.hardsubTitle2')}
                      </h3>
                    </div>
                    <ul className="flex flex-wrap justify-center w-5/6 lg:w-4/6 items-center mx-auto mt-6">
                      {technologies.backEnd.map((tech) => (
                        <li
                          key={tech.name}
                          className="flex items-center mr-2 py-1 px-2 dark:text-black m-1 rounded-md shadow-md  bg-white bg-opacity-50"
                        >
                          {tech.icon}
                          <span className="mx-1">{tech.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-x-2 border-b-2 rounded-b-lg p-8">
                    <div className="flex flex-col justify-center items-center">
                      <div className=" p-4 rounded-full bg-lightTag dark:bg-darkBlue transition-colors duration-500 shadow-md mt-1">
                        <img
                          className="w-16 h-16"
                          src={technologiesManage}
                          alt="project-management"
                        />
                      </div>
                      <h3 className="text-center font-semibold text-3xl">
                        {t('about.hardsubTitle3')}
                      </h3>
                    </div>
                    <ul className="flex flex-wrap justify-center w-5/6 lg:w-4/6 items-center mx-auto mt-6">
                      {technologies.projectManagement.map((tech) => (
                        <li
                          key={tech.name}
                          className="flex items-center mr-2 py-1 px-2 dark:text-black m-1 rounded-md shadow-md  bg-white bg-opacity-50"
                        >
                          {tech.icon}
                          <span className="mx-1">{tech.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div
                  id="contact"
                  className=" bg-white bg-opacity-50 rounded-2xl p-7 m-5"
                >
                  <h2 className="text-2xl font-bold text-center">
                    {t('contact.title')}
                  </h2>
                  <p className="text-center">{t('contact.paraphp1')}</p>
                  <div className="flex justify-center my-3">
                    <Link
                      to="mailto:celia.martinelli2@gmail.com"
                      className=" w-2/3 flex justify-center items-center  bg-vertFonce1 dark:bg-darkBlue text-lightTextButtonNav dark:text-darkTextButtonNav p-2 rounded-lg shadow-md"
                    >
                      celiamartinelli2@gmail.com
                    </Link>
                  </div>
                  <p className="text-center">{t('contact.paraphp2')}</p>
                  <div className="flex justify-center">
                    <Form />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </DarkModeContext.Provider>
      </div>
    </div>
  );
}
