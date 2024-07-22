import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './projectDataEN.json';
import translationFR from './projectDataFR.json';

// Transformation des données JSON en un format utilisable pour les traductions
const transformProjectData = (data) => {
  return data.projects.reduce((acc, project) => {
    const key = Object.keys(project)[0]; // Obtient la clé du projet (nom du projet)
    const projectInfo = project[key];
    acc[key] = {
      id: projectInfo.id,
      title: projectInfo.title,
      description: projectInfo.description,
      technologies: Array.isArray(projectInfo.technologies)
        ? projectInfo.technologies.join(', ')
        : '',
      github: projectInfo.github,
      demo: projectInfo.demo,
      img: projectInfo.img,
      gif: projectInfo.gif,
      titleDescription: projectInfo.titleDescription,
    };
    return acc;
  }, {});
};

const projectDataEN = transformProjectData(translationEN);
const projectDataFR = transformProjectData(translationFR);

const resources = {
  en: {
    translation: {
      home: {
        title: "Hi, I'm Célia Martinelli, Nice to meet you",
        iam: 'I am',
        com: 'I strive to create unique and engaging digital experiences',
      },
      portfolio: {
        title: 'Welcome to my portfolio',
        paraph:
          "I'm a web developer passionate about creating effective and innovative software solutions. I have a strong experience in JavaScript, React, Node.js, React Native and other web development technologies. I've worked on many exciting projects and gained solid experience in various areas of web development.",
        title2: 'Projects',
        p2: 'Here are some projects I have worked on',
        ...projectDataEN,
      },
      header: {},
      footer: {},
    },
  },
  fr: {
    translation: {
      home: {
        title: 'Bonjour, je suis Célia Martinelli, Enchantée',
        iam: 'Je suis',
        com: "Je m'efforce de créer des expériences numériques uniques et engageantes",
      },
      portfolio: {
        title: 'Bienvenue sur mon portfolio',
        paraph:
          "Je suis développeuse web passionnée par la création de solutions logicielles efficaces et innovantes. J'ai une solide expérience en JavaScript, React, Node.js, React Native et d'autres technologies de développement web. J'ai travaillé sur de nombreux projets passionnants et j'ai acquis une solide expérience dans divers domaines du développement web.",
        title2: 'Projets',
        p2: "Voici quelques projets que j'ai réalisés",
        ...projectDataFR,
      },
      header: {},
      footer: {},
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr', // Langue par défaut
  fallbackLng: 'fr', // Langue de secours
  interpolation: {
    escapeValue: false, // React s'occupe déjà de l'échappement des valeurs
  },
});

export default i18n;
