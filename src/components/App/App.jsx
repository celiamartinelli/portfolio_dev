import { Routes, Route } from 'react-router-dom';
// import { useMemo, useEffect } from 'react';
// import FOG from 'vanta/dist/vanta.fog.min';
// import { FiSun, FiMoon } from 'react-icons/fi';
// import DarkModeContext from '../../styles/DarkModeContext';

import NotFoundPage from '../Pages/NotFound/NotFound';
import HomePage from '../Pages/HomePage/HomePage';
// import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

import ProjectPage from '../Pages/ProjectPage/ProjectPage';
import Header from '../Header/Header';

// import { useTheme } from '../ThemeContext/ThemeContext';

export default function App() {
  // const { textColor } = useTheme();
  // const [darkMode, setDarkMode] = useState(false);
  // const [textColor, setTextColor] = useState('black');
  // const { darkMode, setDarkMode, textColor } = useContext(DarkModeContext);
  // const [vantaEffect, setVantaEffect] = useState(null);
  // const myRef = useRef(null);
  // const vantaRef = useRef(null);

  // useEffect(() => {
  //   if (myRef.current) {
  //     if (vantaRef.current) vantaRef.current.destroy();

  //     vantaRef.current = FOG({
  //       el: myRef.current,
  //       mouseControls: true,
  //       touchControls: true,
  //       gyroControls: false,
  //       minHeight: 200.0,
  //       minWidth: 200.0,
  //       highlightColor: darkMode ? 0x4859aa : 0xc4cdfc,
  //       midtoneColor: darkMode ? 0x479696 : 0x96ffff,
  //       lowlightColor: darkMode ? 0x157021 : 0x71ff81,
  //       baseColor: darkMode ? 0x0 : undefined,
  //       blurFactor: 0.9,
  //       speed: 1.3,
  //       zoom: 0.8,
  //     });

  //     setVantaEffect(vantaRef.current);

  //     return () => {
  //       if (vantaRef.current) vantaRef.current.destroy();
  //     };
  //   }
  // }, [darkMode]);
  // const contextValue = useMemo(
  //   () => ({ darkMode, setDarkMode, textColor, setTextColor }),
  //   [darkMode, textColor]
  // );

  return (
    <div
      className="relative w-screen h-screen"
      // style={{ color: textColor }}
    >
      {/* <div 
        ref={myRef}
        className="animation display flex flex-col justify-center min-h-screen"
       > */}
      {/* <DarkModeContext.Provider value={contextValue}> */}
      {/* <button
            type="button"
            className="text-2xl p-2 fixed top-5 right-6 z-10 text-2 button-click-effect"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button> */}
      <Header className="z-10" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:path" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* </DarkModeContext.Provider> */}
      {/* 
      </div>
    </div> */}
    </div>
  );
}
