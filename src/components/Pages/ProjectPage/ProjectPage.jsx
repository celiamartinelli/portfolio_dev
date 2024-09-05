import { Link, useParams } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Footer from '../../Footer/Footer';
import { useDarkMode } from '../../App/DarkModeContext';

export default function ProjectPage() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();
  const { path } = useParams();
  const projectId = parseInt(path, 10);

  const projects = t('portfolio.projects', { returnObjects: true });
  const project = projects.find((p) => p.id === projectId);

  // console.log('projet:', project);

  if (!project) {
    return <div>{t('portfolio.projectNotFound')}</div>;
  }

  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : [];

  console.log('Technologies:', project.technologies);
  console.log('Is technologies an Array?', Array.isArray(project.technologies));

  return (
    <div
      className={`w-screen h-100 pb-32 bg-cover ${
        isDarkMode
          ? 'bg-custom-bg-dark ransition-colors duration-500'
          : 'bg-custom-bg ransition-colors duration-500'
      }`}
    >
      <div className="flex flex-col justify-center min-h-screen">
        <div className="bg-white bg-opacity-30 rounded-2xl p-7 w-10/12 flex flex-col justify-center items-center mx-auto mt-28 shadow-xl mb-10 dark:bg-gray-500 dark:bg-opacity-30">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl mr-3">{project.title}</h1>
            <img
              src={`${project.img}`}
              alt={`logo_${project.title}`}
              className="w-12 shadow-md rounded-full"
            />
          </div>
          <div className="flex justify-center items-center mx-5 my-5">
            {project.id !== 2 && project.id !== 3 ? (
              <Link
                rel="noopener noreferrer"
                target="_blank"
                to={project.demo}
                className=" bg-lightButtonNav text-lightTextButtonNav dark:bg-vertFonce1 dark:text-darkTextButtonNav  p-2 rounded-lg shadow-md mx-2 text-center hover:animate-press duration-500 transition-transform"
              >
                {t('projectPage.visitSite')} {project.title}
              </Link>
            ) : null}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              className=" bg-lightButtonNav text-lightTextButtonNav dark:bg-vertFonce1 dark:text-darkTextButtonNav p-2 rounded-lg shadow-md mx-2 flex items-center text-center hover:animate-press duration-500 transition-transform"
              to={project.github}
            >
              <FaGithub className="text-2xl mr-2" />
              {t('projectPage.viewCode')}
            </Link>
          </div>

          <div className="mb-4 flex flex-col m-5">
            <img
              className="rounded-lg shadow-md"
              src={project.gif}
              alt={`Capture d'écran de ${project.title}`}
            />
            <p className="text-justify mt-8">{project.description}</p>
          </div>

          <div className="mt-4 flex flex-col justify-center items-center">
            <h2> {t('projectPage.technologiesUsed')}</h2>
            {technologies.length > 0 ? (
              <ul className="flex flex-wrap justify-center">
                {technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md p-1 px-2 m-1 mx-2 shadow-md bg-vertFonce1 text-white dark:bg-darkBlue dark:bg-opacity-75  dark:text-darkTextTag"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Aucune technologie disponible</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
