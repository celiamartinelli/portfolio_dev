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
      className={`w-screen h-screen bg-cover ${
        isDarkMode ? 'bg-custom-bg-dark' : 'bg-custom-bg'
      }`}
    >
      <div className="flex flex-col justify-center min-h-screen">
        <div className="bg-white bg-opacity-30 rounded-2xl p-7 w-10/12 flex flex-col justify-center items-center mx-auto mt-20 shadow-xl mb-10">
          <h1 className="text-3xl">{project.title}</h1>
          <p className="text-justify m-4">{project.description}</p>

          <div className="mb-4">
            <img
              className="rounded-lg shadow-md"
              src={project.gif}
              alt={`Capture d'écran de ${project.title}`}
            />
          </div>
          <div className="flex justify-center items-center">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              to={project.demo}
              className=" bg-lightBlue p-4 rounded-lg shadow-md mx-2"
            >
              {t('projectPage.visitSite')} {project.title}
            </Link>

            <Link
              rel="noopener noreferrer"
              target="_blank"
              className=" bg-lightBlue p-4 rounded-lg shadow-md mx-2 flex items-center"
              to={project.github}
            >
              <FaGithub className="text-2xl mr-2" />
              {t('projectPage.viewCode')}
            </Link>
          </div>
          <div className="mt-4 flex flex-col justify-center items-center">
            <h2> {t('projectPage.technologiesUsed')}</h2>
            {technologies.length > 0 ? (
              <ul className="flex flex-wrap">
                {technologies.map((tech) => (
                  <li
                    key={tech}
                    className="bg-lightMint rounded-md p-1 px-2 m-1 mx-2 shadow-md"
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
