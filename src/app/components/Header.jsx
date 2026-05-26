"use client";

import React, { useState, useEffect } from "react";
import styles from './Header.module.scss'; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);   
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
      
        <div className={styles.logo}>
          <img src="/assets/logo-le-stud.png" alt="Le Stud Logo" />
        </div>

       

      </div>
    </header>
  );
};

export default Header;