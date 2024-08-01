import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div
      id="contact"
      className=" bg-white bg-opacity-50 dark:bg-gray-500 dark:bg-opacity-30 rounded-2xl p-7 m-5"
    >
      <h2 className="text-3xl font-bold text-center mb-4">
        {t('contact.title')}
      </h2>
      <p className="text-center">{t('contact.paraphp1')}</p>
      <div className="flex justify-center my-3">
        <Link
          to="mailto:celia.martinelli2@gmail.com"
          className="px-5 flex justify-center items-center text-white  bg-vertFonce1 dark:bg-darkBlue dark:bg-opacity-75  dark:text-darkTextButtonNav p-2 rounded-lg shadow-md transition ease-in duration-25 transform hover:scale-95"
        >
          celiamartinelli2@gmail.com
        </Link>
      </div>
      <p className="text-center">{t('contact.paraphp2')}</p>
      <div className="flex justify-center">
        <Form />
      </div>
    </div>
  );
}
