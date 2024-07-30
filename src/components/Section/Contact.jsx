import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div id="contact" className=" bg-white bg-opacity-50 rounded-2xl p-7 m-5">
      <h2 className="text-2xl font-bold text-center">{t('contact.title')}</h2>
      <p className="text-center">{t('contact.paraphp1')}</p>
      <div className="flex justify-center my-3">
        <Link
          to="mailto:celia.martinelli2@gmail.com"
          className=" w-2/3 flex justify-center items-center text-white  bg-vertFonce1 dark:bg-darkBlue  dark:text-darkTextButtonNav p-2 rounded-lg shadow-md"
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
