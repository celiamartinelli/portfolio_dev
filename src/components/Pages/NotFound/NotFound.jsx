import { useState, useEffect, useRef, useMemo } from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import { useTranslation } from 'react-i18next';
import DarkModeContext from '../../../styles/DarkModeContext';

import { useDarkMode } from '../../App/DarkModeContext';

export default function NotFound() {
  const myRef = useRef(null);
  const vantaRef = useRef(null);
  const { t } = useTranslation();
  const [vantaEffect, setVantaEffect] = useState(null);
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const [textColor, setTextColor] = useState('black');

  // Helper function to interpolate between two colors
  const interpolateColor = (color1, color2, factor) => {
    const result = color1
      .slice(1)
      .match(/.{2}/g)
      .map((hex, i) => {
        const v1 = parseInt(hex, 16);
        const v2 = parseInt(color2.slice(1).match(/.{2}/g)[i], 16);
        const val = Math.round(v1 + factor * (v2 - v1))
          .toString(16)
          .padStart(2, '0');
        return val;
      });
    return `#${result.join('')}`;
  };

  // Function to smoothly transition Vanta colors
  const transitionVantaColors = (duration) => {
    const steps = 30; // Number of steps in the transition
    const intervalTime = duration / steps;
    let currentStep = 0;

    const initialColors = {
      highlightColor: isDarkMode ? '#c4cdfc' : '#4859aa',
      midtoneColor: isDarkMode ? '#96ffff' : '#479696',
      lowlightColor: isDarkMode ? '#71ff81' : '#157021',
      baseColor: isDarkMode ? undefined : '#000000',
    };

    const targetColors = {
      highlightColor: isDarkMode ? '#4859aa' : '#c4cdfc',
      midtoneColor: isDarkMode ? '#479696' : '#96ffff',
      lowlightColor: isDarkMode ? '#157021' : '#71ff81',
      baseColor: isDarkMode ? '#000000' : undefined,
    };

    const updateColors = () => {
      const factor = currentStep / steps;
      vantaRef.current.setOptions({
        highlightColor: interpolateColor(
          initialColors.highlightColor,
          targetColors.highlightColor,
          factor
        ),
        midtoneColor: interpolateColor(
          initialColors.midtoneColor,
          targetColors.midtoneColor,
          factor
        ),
        lowlightColor: interpolateColor(
          initialColors.lowlightColor,
          targetColors.lowlightColor,
          factor
        ),
        baseColor: targetColors.baseColor,
      });
      currentStep += 1;
      if (currentStep <= steps) {
        setTimeout(updateColors, intervalTime);
      }
    };

    updateColors();
  };

  useEffect(() => {
    if (myRef.current) {
      if (vantaRef.current) vantaRef.current.destroy();

      vantaRef.current = FOG({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: isDarkMode ? 0x4859aa : 0xc4cdfc,
        midtoneColor: isDarkMode ? 0x479696 : 0x96ffff,
        lowlightColor: isDarkMode ? 0x157021 : 0x71ff81,
        baseColor: isDarkMode ? 0x0 : undefined,
        blurFactor: 0.9,
        speed: 4,
        zoom: 1,
      });

      setVantaEffect(vantaRef.current);

      return () => {
        if (vantaRef.current) vantaRef.current.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (vantaRef.current) {
      transitionVantaColors(1000); // Smooth transition over 1 second
    }
  }, [isDarkMode]);

  const contextValue = useMemo(
    () => ({ isDarkMode, setIsDarkMode, textColor, setTextColor }),
    [isDarkMode, setIsDarkMode, textColor]
  );

  useEffect(() => {
    setTextColor(isDarkMode ? 'white' : 'black');
  }, [isDarkMode]);

  return (
    <div
      ref={myRef}
      className="animation display flex flex-col justify-center min-h-screen pb-28"
    >
      <DarkModeContext.Provider value={contextValue}>
        <div id="vanta-container">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl mb-10">{t('NotFound.h1404')}</h1>
            <p className="mb-10">{t('NotFound.p404')}</p>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="bg-vertFonce1 dark:bg-darkBlue text-white p-2 rounded  flex justify-center items-center active:bg-emerald-700 transition ease-in duration-25 transform hover:scale-95 shadow-md"
            >
              {t('NotFound.back')}
            </button>
          </div>
        </div>
      </DarkModeContext.Provider>
    </div>
  );
}
