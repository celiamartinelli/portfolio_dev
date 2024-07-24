import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="hidden sm:block text-center">
      <h6>©{t('footer.copyright')} </h6>
    </div>
  );
}
