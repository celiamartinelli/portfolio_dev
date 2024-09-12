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
          className="mt-4 bg-pink text-white py-2 px-4 rounded-md"
        >
          {t('modal.close')}
        </button>
      </div>
    </div>
  );
}
