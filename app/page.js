"use client";
import React, {useEffect, useState} from "react";
import Splash from "../components/Splash/page";
import Signin from "./signin/page";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 468);
    };

    handleResize(); // Call once to set the initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {/* Conditional rendering based on screen size */}
      {isMobile ? <Splash /> : <Signin />}
    </div>
  );
};

export default Home;
