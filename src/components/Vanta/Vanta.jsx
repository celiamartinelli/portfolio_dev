import { useState, useEffect, useRef } from 'react';
// import CLOUDS from 'vanta/dist/vanta.clouds.min';
import FOG from 'vanta/dist/vanta.fog.min';

// import BIRDS from 'vanta/dist/vanta.birds.min';
// import DOTS from 'vanta/dist/vanta.dots.min';
// import WAVES from 'vanta/dist/vanta.waves.min';
// import RINGS from 'vanta/dist/vanta.rings.min';
// import NET from 'vanta/dist/vanta.net.min';

export default function Vanta() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xc4cdfc,
          midtoneColor: 0x96ffff,
          lowlightColor: 0x71ff81,
          blurFactor: 0.9,
          speed: 1.3,
          zoom: 0.2,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative">
      <div
        ref={myRef}
        className="animation display flex flex-col justify-center h-screen"
      >
        blabla
      </div>
    </div>
  );
}
