import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CgWebsite } from 'react-icons/cg';
import { CiMobile3 } from 'react-icons/ci';
import { IoServerOutline } from 'react-icons/io5';
import { BsGlobe2 } from 'react-icons/bs';
// import { useDarkMode } from '../App/DarkModeContext';

export default function Portfolio() {
  const { t } = useTranslation();
  //   const { isDarkMode, setIsDarkMode } = useDarkMode();
  const projects = useMemo(() => {
    const data = t('portfolio.projects', { returnObjects: true });
    // console.log('Projects Data:', data);
    return Array.isArray(data) ? data : [];
  }, [t]);

  return (
    <div
      id="portfolio"
      className=" bg-white bg-opacity-50 rounded-2xl p-7 m-5 dark:bg-gray-500 dark:bg-opacity-30"
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        {t('portfolio.title')}
      </h2>
      <p className="text-center mb-8">{t('portfolio.paraph')}</p>
      <div>
        <h2 className="text-center text-2xl font-bold mb-4">
          {t('portfolio.title2')}
        </h2>
        <p className="text-center"> {t('portfolio.p2')}</p>
        <div className="flex justify-center ">
          <ul className="flex flex-col flex-wrap justify-center sm:flex-row">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative flex justify-center m-4 p-4 rounded-lg shadow-xl bg-white bg-opacity-50 sm:w-3/12 transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-white  hover:bg-opacity-75 dark:hover:bg-gray-400 dark:hover:bg-opacity-50 hover:mx-6 dark:bg-gray-500 dark:bg-opacity-50"
              >
                <Link
                  to={`/project/${project.id}`}
                  className="text-blue-500 block "
                  data-id={project.id}
                >
                  <div className="flex justify-end">
                    {project.iconType && (
                      <div className="bg-vertFonce1 rounded-full w-7 h-7 flex items-center justify-center text-white shadow-md">
                        {project.iconType === 'web' && <BsGlobe2 />}
                        {project.iconType === 'api' && <CiMobile3 />}
                        {project.iconType === 'mobile' && <IoServerOutline />}
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-center">
                    {project.title}
                  </h3>

                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-20 h-20 mx-auto"
                  />
                  <p className=" mt-2 text-center">
                    {project.titleDescription}
                  </p>
                </Link>
              </div>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <p className="text-center"> {t('portfolio.p3')}</p>
          {/* <h3 className="text-2xl font-semibold text-center">
            {t('portfolio.title3')}
          </h3> */}
        </div>
      </div>
    </div>
  );
}
