import { useTranslation } from 'react-i18next';

export default function SendSuccessfully({ onClose }) {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1>{t('form.h1modal')}</h1>
        <p>{t('form.pmodal')}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-4  bg-vertFonce1 dark:bg-darkBlue dark:text-white p-2 rounded flex justify-center items-center active:bg-emerald-700 transition ease-in duration-25 transform hover:scale-95 shadow-md"
        >
          {t('form.close')}
        </button>
      </div>
    </div>
  );
}
