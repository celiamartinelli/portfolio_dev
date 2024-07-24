import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './projectDataEN.json';
import translationFR from './projectDataFR.json';
import { BiCopyright } from 'react-icons/bi';

// Transformation des données JSON en un format utilisable pour les traductions
const transformProjectData = (data) => {
  const projects = data.projects.map((project) => {
    const key = Object.keys(project)[0];
    const projectInfo = project[key];
    return {
      id: projectInfo.id,
      title: projectInfo.title,
      description: projectInfo.description,
      technologies: Array.isArray(projectInfo.technologies)
        ? projectInfo.technologies
        : [],
      github: projectInfo.github,
      demo: projectInfo.demo,
      img: projectInfo.img,
      gif: projectInfo.gif,
      titleDescription: projectInfo.titleDescription,
    };
  });
  return {
    projects,
    softSkills: data.softSkills,
  };
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
        projects: projectDataEN.projects,
        softSkills: projectDataEN.softSkills,
      },
      about: {
        title: 'About me',
        paraph:
          "I love solving complex problems and creating software solutions that have a real impact. I'm always looking for new opportunities to learn and grow as a developer. If you're interested in my work or want to discuss a potential opportunity, feel free to contact me.",
        hardSkill: 'Hard Skills',
        softSkill: 'Soft Skills',
      },
      contact: {
        title: 'Contact me',
        paraphp1: 'You can send me an email at the following address:',
        paraphp2:
          "or follow me on social media. I'd love to hear from you and discuss how we could work together to create something great.",
      },
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send',
        required: 'Required field',
        invalidEmail: 'Invalid email',
        messageSent: 'Message sent',
        messageError: 'Error sending message',
      },
      header: {},
      footer: {
        copyright: 'Copyright 2024 Directed by Célia Martinelli',
        madeBy: 'Made with',
      },
      projectPage: {
        projectNotFound: 'Project not found',
        visitSite: 'Visit the site',
        viewCode: 'View source code',
        technologiesUsed: 'Technologies used',
      },
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
        projects: projectDataFR.projects,
        softSkills: projectDataFR.softSkills,
      },
      about: {
        title: 'À propos de moi',
        paraph:
          "J'aime résoudre des problèmes complexes et créer des solutions logicielles qui ont un impact réel. Je suis toujours à la recherche de nouvelles opportunités pour apprendre et grandir n tant que développeur. Si vous êtes intéressé par mon travail ou si vous souhaitez discuter d'une opportunité potentielle, n'hésitez pas à me contacter.",
        hardSkill: 'Hard Skills',
        softSkill: 'Soft Skills',
      },
      contact: {
        title: 'Contactez-moi',
        paraphp1: " Vous pouvez m'envoyer un email à l'adresse suivante :",
        paraphp2:
          "ou me suivre sur les réseaux sociaux. J'aimerais avoir de vos nouvelles et discuter de la façon dont nous pourrions travailler ensemble pour créer quelque chose de grand.",
      },
      form: {
        name: 'Nom',
        email: 'Email',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer',
        required: 'Champ requis',
        invalidEmail: 'Email invalide',
        messageSent: 'Message envoyé',
        messageError: "Erreur lors de l'envoi du message",
      },
      header: {},
      footer: {
        copyright: "Droits d'auteur 2024 Réalisé par Célia Martinelli",
        madeBy: 'Fait avec',
      },
      projectPage: {
        projectNotFound: 'Projet non trouvé',
        visitSite: 'Visiter le site',
        viewCode: 'Voir le code source',
        technologiesUsed: 'Technologies utilisées',
      },
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
