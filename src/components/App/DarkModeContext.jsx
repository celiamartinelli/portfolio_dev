import { createContext, useContext, useState, useEffect } from 'react';

// Initialisation du contexte DarkMode avec une valeur par défaut indéfinie
const DarkModeContext = createContext();

// Hook personnalisé pour utiliser le contexte DarkMode
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error(
      "useDarkMode doit être utilisé à l'intérieur d'un DarkModeProvider"
    );
  }
  return context;
};

// Composant fournisseur pour englober les composants enfants et gérer le mode sombre
export const DarkModeProvider = ({ children }) => {
  // État pour gérer si le mode sombre est activé ou non
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Tentative de récupération du mode sombre depuis localStorage
    const savedMode = localStorage.getItem('dark-mode');
    // Parse le mode sauvegardé ou retourne false par défaut
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Effet pour mettre à jour le localStorage et la classe du document sur changement de isDarkMode
  useEffect(() => {
    // Sauvegarde du mode sombre dans localStorage
    localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
    // Ajout ou suppression de la classe 'dark' sur l'élément racine du document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Fournit le contexte aux composants enfants
  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
