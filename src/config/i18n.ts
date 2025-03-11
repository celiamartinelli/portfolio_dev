import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './projectDataEN.json';
import translationFR from './projectDataFR.json';
import { BiCopyright } from 'react-icons/bi';
import { TiThLarge } from 'react-icons/ti';

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
    qualities: data.qualities,
  };
};

const projectDataEN = transformProjectData(translationEN);
const projectDataFR = transformProjectData(translationFR);

const resources = {
  en: {
    translation: {
      home: {
        title: 'Célia Martinelli',
        subtitle:
          '💡 Web developer with a dual mindset: 🧠 rigorous logic meets 🎨 boundless creativity.',
        iam: 'I am',
        com: '🚀 Coming from a career change, I initially chose web development out of pragmatism, but I soon discovered the perfect balance between structure 🏗️ and imagination ✨. I love designing well-thought-out applications where architecture 🏛️ and user experience 🖥️ seamlessly intertwine.',
        com2: '💻 With a particular fondness for React ⚛️, I enjoy shaping how users navigate an application, structuring functionalities 🛠️, and collaborating 🤝 to bring impactful projects to life. My work on Yuli 💡 is a great example of this—just like the countless hours I spent perfecting Coloc & Co 🏡, because sometimes, coding for 36 hours straight ⏳ is just for the style. 😆',
        goal: '🎯 My goal? To become an application designer 🏗️ and craft digital experiences 📲 that are as intuitive as they are powerful.',
        button1: 'Download CV',
      },
      portfolio: {
        title: 'Welcome to my portfolio',
        paraph:
          "I'm a web developer passionate about creating effective and innovative software solutions. I have a strong experience in JavaScript, React, Node.js, React Native and other web development technologies. I've worked on many exciting projects and gained solid experience in various areas of web development.",
        title2: 'Web Applications Projects',
        p2: 'Here are some projects I have worked on',
        projects: projectDataEN.projects,
        softSkills: projectDataEN.softSkills,
        qualities: projectDataEN.qualities,
        p3: 'Throughout the year, I had the opportunity to attend a bootcamp training that allowed me to acquire numerous skills and add multiple tools to my toolkit. At the end of this training, a six-month internship opportunity presented itself. The project involved developing a mobile application. There was no better way to expand my skill set than to dive into the world of mobile development with React Native and Expo.',
        title3: 'Mobile Applications Projects',
      },
      about: {
        title: 'About me',
        paraph:
          "I love solving complex problems and creating software solutions that have a real impact. I'm always looking for new opportunities to learn and grow as a developer. If you're interested in my work or want to discuss a potential opportunity, feel free to contact me.",
        hardSkill: 'Hard Skills',
        hardTitle: 'Technical Skills',
        hardsubTitle1: 'Front-end',
        hardsubTitle2: 'Back-end',
        hardsubTitle3: 'Project Management',
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
        h1modal: 'Message sent successfully!',
        pmodal:
          'Thank you for your message. I will get back to you as soon as possible.',
        close: 'Close',
        error: {
          name: 'Name is required.',
          email: 'Email is required.',
          invalidEmail: 'Please enter a valid email address.',
          subject: 'Subject is required.',
          message: 'Message is required.',
        },
      },
      header: {
        home: 'Home',
        portfolio: 'Portfolio',
        about: 'About',
        contact: 'Contact',
      },
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
      NotFound: {
        h1404: '404 - Page not found',
        p404: 'Oops! The page you are looking for does not exist.',
        back: 'Go Back',
      },
    },
  },
  fr: {
    translation: {
      home: {
        title: 'Célia Martinelli',
        subtitle:
          '💡 Développeuse web au double visage : 🧠 logique rigoureuse et 🎨 créativité débordante.',
        iam: 'Je suis',

        com: '🚀 Issue d’une reconversion, j’ai choisi le développement web par pragmatisme, mais j’y ai découvert un équilibre parfait entre structure 🏗️ et imagination ✨. J’aime concevoir des applications bien pensées où architecture 🏛️ et expérience utilisateur 🖥️ s’entrelacent harmonieusement.',
        com2: '💻 Avec une affection particulière pour React ⚛️, j’adore imaginer comment on va naviguer dans une application, structurer ses fonctionnalités 🛠️ et collaborer 🤝 pour donner vie à des projets impactants. Mon travail sur Yuli 💡 en est un parfait exemple, tout comme mes 36 heures de code non-stop ⏳ sur Coloc & Co 🏡, juste pour le style. 😆',
        goal: '🎯 Mon objectif ? Devenir conceptrice d’application 🏗️ et façonner des expériences digitales 📲 aussi intuitives que performantes.',
        button1: 'Télécharger le CV',
      },
      portfolio: {
        title: 'Bienvenue sur mon portfolio',
        paraph:
          "Je suis développeuse web passionnée par la création de solutions logicielles efficaces et innovantes. J'ai une solide expérience en JavaScript, React, Node.js, React Native et d'autres technologies de développement web. J'ai travaillé sur de nombreux projets passionnants et j'ai acquis une solide expérience dans divers domaines du développement web.",
        title2: 'Projets Web Applications',
        p2: "Voici quelques projets que j'ai réalisés",
        projects: projectDataFR.projects,
        softSkills: projectDataFR.softSkills,
        qualities: projectDataFR.qualities,
        p3: "Au cours de l’année, j'ai eu l’occasion de suivre une formation intensive qui m'a permis d’acquérir de nombreuses connaissances et d’ajouter de multiples outils à ma boîte à outils. À la fin de cette formation, une opportunité de stage de six mois s'est présentée à moi. Il s'agissait de développer une application mobile. Rien de mieux pour élargir ma gamme de compétences que de plonger dans le monde du développement mobile avec React Native et Expo.",
        title3: 'Projets Mobiles Application',
      },
      about: {
        title: 'À propos de moi',
        paraph:
          "J'aime résoudre des problèmes complexes et créer des solutions logicielles qui ont un impact réel. Je suis toujours à la recherche de nouvelles opportunités pour apprendre et grandir en tant que développeur. Si vous êtes intéressé par mon travail ou si vous souhaitez discuter d'une opportunité potentielle, n'hésitez pas à me contacter.",
        hardSkill: 'Hard Skills',
        hardTitle: 'Compétences techniques',
        hardsubTitle1: 'Front-end',
        hardsubTitle2: 'Back-end',
        hardsubTitle3: 'Gestion de Projet',
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
        h1modal: 'Message envoyé avec succès!',
        pmodal: 'Merci pour votre message. Je vous répondrai dès que possible.',
        close: 'Fermer',
        error: {
          name: 'Le nom est requis.',
          email: "L'adresse e-mail est requise.",
          invalidEmail: 'Veuillez entrer une adresse e-mail valide.',
          subject: 'Le sujet est requis.',
          message: 'Le message est requis.',
        },
      },
      header: {
        home: 'Accueil',
        portfolio: 'Portfolio',
        about: 'À propos',
        contact: 'Contact',
      },
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
      NotFound: {
        h1404: '404 - Page non trouvé',
        p404: 'Oups! La page que vous recherchez n’existe pas.',
        back: 'Retour',
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
