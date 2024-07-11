import React from 'react';

const DarkModeContext = React.createContext({
  darkMode: false,
  setDarkMode: () => {},
  textColor: 'black',
  setTextColor: () => {},
});

export default DarkModeContext;
