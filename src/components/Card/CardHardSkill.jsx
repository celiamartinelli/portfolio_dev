// import { useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
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
// import { Link, useLocation } from 'react-router-dom';
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
// import DarkModeContext from '../../styles/DarkModeContext';
import { useDarkMode } from '../App/DarkModeContext';

export default function CardHardSkill() {
  const { t } = useTranslation();
  const { isDarkMode } = useDarkMode();

  const technologiesFront = isDarkMode
    ? '../../assets/project/technologies/front-end-dark.png'
    : '../../assets/project/technologies/front-end.png';

  const technologiesBack = isDarkMode
    ? '../../assets/project/technologies/back-end-dark.png'
    : '../../assets/project/technologies/back-end.png';

  const technologiesManage = isDarkMode
    ? '../../assets/project/technologies/project-management-dark.png'
    : '../../assets/project/technologies/project-management.png';

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
  return (
    <div className="mt-4">
      <h2 className="text-center text-2xl mb-8 font-bold">
        {t('about.hardSkill')}
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="border-x-2 border-t-2 rounded-t-lg p-8 lg:border-y-2 border-l-2 lg:rounded-l-lg lg:rounded-none lg:w-3/5">
          <div className="flex flex-col  justify-center items-center">
            <div className=" p-6 rounded-full bg-lightTag dark:bg-darkBlue dark:bg-opacity-75 transition-colors duration-500 shadow-md mt-1">
              <img
                className="w-14 h-14"
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
                className="flex items-center mr-2 py-1 px-2 dark:text-black m-1 rounded-md shadow-md bg-lightTag dark:bg-white bg-opacity-50 dark:bg-opacity-75"
              >
                {tech.icon}
                <span className="mx-1">{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-2 p-8 lg:border-y-2 lg:border-x-none lg:w-3/5">
          <div className="flex flex-col justify-center items-center">
            <div className=" p-4 rounded-full bg-lightTag dark:bg-darkBlue dark:bg-opacity-75 transition-colors duration-500 shadow-md mt-1">
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
                className="flex items-center mr-2 py-1 px-2 dark:text-black m-1 rounded-md shadow-md  bg-lightTag dark:bg-white  bg-opacity-50 dark:bg-opacity-75"
              >
                {tech.icon}
                <span className="mx-1">{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-x-2 border-b-2 rounded-b-lg p-8 lg:border-y-2 lg:border-r-2 lg:rounded-tr-lg  lg:rounded-br-lg  lg:rounded-bl-none lg:w-2/4">
          <div className="flex flex-col justify-center items-center">
            <div className=" p-6 rounded-full bg-lightTag dark:bg-darkBlue dark:bg-opacity-75 transition-colors duration-500 shadow-md mt-1">
              <img
                className="w-14 h-14"
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
                className="flex items-center mr-2 py-1 px-2 dark:text-black m-1 rounded-md shadow-md  bg-lightTag dark:bg-white  bg-opacity-50 dark:bg-opacity-75"
              >
                {tech.icon}
                <span className="mx-1">{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
