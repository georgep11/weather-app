import React, { useState, useEffect, useRef, useContext } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import Search from "./Search";
import { context } from "./context";
import Weather from "./Weather";
import News from "./News";
import Covid from "./Covid";
import globe from "./assets/globe.png";

const Header = (props) => {
  const myRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(0);
  const { theme } = useContext(context);

  useEffect(() => {
    console.log(theme);
    if (theme === "d") {
      if (vantaEffect) vantaEffect.destroy();
      setVantaEffect(
        CLOUDS({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 200.0,
          // scale: 1.0,
          // scaleMobile: 1.0,
          backgroundColor: 0x0,
        })
      );
    } else if (theme === "n") {
      if (vantaEffect) vantaEffect.destroy();
      setVantaEffect(
        CLOUDS({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 200.0,
          skyColor: 0x2020c,
          cloudColor: 0x6a7c9b,
          cloudShadowColor: 0x8111b,
          sunColor: 0xfafafa,
          sunGlareColor: 0xffffff,
          sunlightColor: 0xf5f5f5,
          // scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [theme]);
  return (
    <div ref={myRef} className="header">
      <div className="logo">
        <img src={globe} alt="" />
        <h2 style={{ color: "white" }}>Weather App</h2>
      </div>
      <Search />
      <Weather />
      <News />
      <Covid />
    </div>
  );
};

export default React.memo(Header);
