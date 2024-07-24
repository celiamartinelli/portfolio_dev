import { useState, useEffect, useRef, useMemo } from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import { useTranslation } from 'react-i18next';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import DarkModeContext from '../../../styles/DarkModeContext';
import './HomePage.scss';
import Form from '../../Form/Form';
// import projectDataFR from '../../../config/projectDataFR.json';
import Footer from '../../Footer/Footer';
import { useDarkMode } from '../../App/DarkModeContext';

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

  const technologies = [
    'React',
    'Node.js',
    'JavaScript',
    'HTML',
    'CSS',
    'React Native',
    'Supabase',
    'Expo',
    'TailwindCSS',
  ];

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
        className="animation display flex flex-col justify-center min-h-screen"
      >
        <DarkModeContext.Provider value={contextValue}>
          <div id="home">
            <div className="overflow-hidden">
              <div className="text-lg mt-40 text-center m-5">
                <h1>{t('home.title')}</h1>
                <div>
                  <h1 className="text-4xl">
                    {t('home.iam')} <span>{text}</span>
                    <Cursor cursorColor="green" />
                  </h1>
                </div>
                <p className="text-m">{t('home.com')}</p>
              </div>
            </div>

            <div>
              <div
                id="portfolio"
                className=" bg-white bg-opacity-30 rounded-2xl p-7 m-5"
              >
                <h2 className="text-2xl font-bold text-center">
                  {t('portfolio.title')}
                </h2>
                <p className="text-center">{t('portfolio.paraph')}</p>
                <div className="flex items-center justify-center">
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex flex-col items-center justify-center text-center bg-lightMint text-white py-2 px-4 rounded shadow transition ease-in duration-25 transform hover:scale-95 focus:outline-none mx-2"
                    to="https://github.com/celiamartinelli?tab=overview&from=2024-04-01&to=2024-04-30"
                  >
                    <FaGithub className="text-5xl" />
                  </Link>
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex flex-col items-center justify-center text-center bg-lightMint text-white py-2 px-4 rounded shadow transition ease-in duration-25 transform hover:scale-95 focus:outline-none mx-2"
                    to="https://www.linkedin.com/in/celiamartinelli/"
                  >
                    <FaLinkedinIn className="text-5xl" />
                  </Link>
                </div>
                <div>
                  <h2 className="text-center font-bold">
                    {t('portfolio.title2')}
                  </h2>
                  <p className="text-center"> {t('portfolio.p2')}</p>
                  <div className="flex justify-center ">
                    <ul className="flex flex-row flex-wrap">
                      {projects.map((project) => (
                        <div
                          key={project.id}
                          className="m-4 p-4 rounded-lg shadow-xl bg-white bg-opacity-30 w-72 transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-white
                          
                          
                           hover:bg-opacity-75"
                        >
                          <Link
                            to={`/project/${project.id}`}
                            className="text-blue-500 mt-2 block"
                            data-id={project.id}
                          >
                            <h3 className="text-xl font-semibold">
                              {project.title}
                            </h3>

                            <img
                              src={project.img}
                              alt={project.title}
                              className="w-20 h-20 mx-auto"
                            />
                            <p className="mt-2">{project.titleDescription}</p>
                          </Link>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div
                id="about"
                className=" bg-white bg-opacity-50 rounded-2xl p-7 m-5"
              >
                <h2 className="text-2xl font-bold text-center">
                  {t('about.title')}
                </h2>
                <p className="text-center">{t('about.paraph')}</p>
                <div>
                  <h2 className="text-center font-bold">
                    {t('about.hardSkill')}
                  </h2>
                  <ul className="flex flex-wrap justify-center">
                    {technologies.map((tech) => (
                      <li
                        key={tech}
                        className="mr-2 py-1 px-2 rounded bg-lightMint m-1"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-center font-bold">
                    {t('about.softSkill')}
                  </h2>
                  <ul className="flex flex-wrap justify-center">
                    {t('portfolio.softSkills', { returnObjects: true }).map(
                      (skill) => (
                        <li key={skill}>{skill}</li>
                      )
                    )}
                  </ul>
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
                  <p className="text-center">
                    {t('contact.paraphp1')} <br />
                    <a
                      href="mailto:celia.martinelli2@gmail.com"
                      className="text-emerald-500"
                    >
                      celiamartinelli2@gmail.com
                    </a>{' '}
                    <br />
                    {t('contact.paraphp2')}
                  </p>
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
