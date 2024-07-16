import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center">
      <button type="button" onClick={toggleLanguage}>
        <img
          className="size-5"
          src={
            language === 'en'
              ? '/assets/united-kingdom.png'
              : '/assets/france.png'
          }
          alt={language === 'en' ? 'English' : 'Français'}
        />
      </button>
    </div>
  );
}
