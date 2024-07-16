// src/config/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: {
        title: "Hi, I'm Célia Martinelli, Nice to meet you",
      },
      header: {},
      footer: {},
    },
  },
  fr: {
    translation: {
      home: {
        title: 'Bonjour, je suis Célia Martinelli, Enchantée',
      },
      header: {},
      footer: {},
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr', // Langue par défaut
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React gère déjà la protection contre les XSS
  },
});

export default i18n;
