import { useTranslation } from 'react-i18next';

export default function SendSuccessfully({ children, onClose }) {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-darkPruneBG p-6 rounded-lg shadow-lg">
        {children}
        <button
          type="button"
          onClick={onClose}
          className="mt-4 bg-vertFonce1 dark:bg-darkBlue text-white p-2 rounded w-full flex justify-center items-center active:bg-emerald-700 transition ease-in duration-25 transform hover:scale-95 shadow-md"
        >
          {t('modal.close')}
        </button>
      </div>
    </div>
  );
}
