import { useTranslation } from 'react-i18next';
import CardHardSkill from '../Card/CardHardSkill';

export default function About() {
  const { t } = useTranslation();
  return (
    <div
      id="about"
      className=" bg-white bg-opacity-50 dark:bg-gray-500 dark:bg-opacity-30 rounded-2xl p-7 m-5"
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        {t('about.title')}
      </h2>
      <p className="text-center mb-8">{t('about.paraph')}</p>
      <div>
        <h2 className="text-center text-2xl font-bold mb-4">
          {t('about.softSkill')}
        </h2>
        <ul className="flex flex-wrap justify-center">
          {t('portfolio.softSkills', { returnObjects: true }).map((skill) => (
            <li
              className="bg-vertFonce1 text-white d dark:bg-darkBlue  dark:bg-opacity-75 py-1 px-2 rounded-md m-1 shadow-md"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-center text-2xl">{t('about.hardTitle')}</h2>
        <CardHardSkill />
      </div>
    </div>
  );
}
