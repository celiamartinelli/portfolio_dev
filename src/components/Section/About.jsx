import { useTranslation } from 'react-i18next';
import CardHardSkill from '../Card/CardHardSkill';

export default function About() {
  const { t } = useTranslation();
  return (
    <div id="about" className=" bg-white bg-opacity-50 rounded-2xl p-7 m-5">
      <h2 className="text-4xl font-bold text-center">{t('about.title')}</h2>
      <p className="text-center">{t('about.paraph')}</p>
      <div>
        <h2 className="text-center font-bold">{t('about.softSkill')}</h2>
        <ul className="flex flex-wrap justify-center">
          {t('portfolio.softSkills', { returnObjects: true }).map((skill) => (
            <li
              className="bg-vertFonce1 text-black dark:text-white dark:bg-darkBlue py-1 px-2 rounded-md m-1 shadow-md"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <h2 className="text-center text-4xl">{t('about.hardTitle')}</h2>
      <CardHardSkill />
    </div>
  );
}
