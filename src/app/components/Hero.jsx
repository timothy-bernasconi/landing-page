"use client"

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.scss'


export const Hero = ({ words = [], speed = 100, deleteSpeed = 50, delay = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const fullWord = words[currentWordIndex];
    let timer;

    if (!isDeleting) {
      // MODE ÉCRITURE : On ajoute une lettre
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
      }, speed);

      // Si le mot est entièrement écrit, on attend avant de commencer à effacer
      if (currentText === fullWord) {
        clearTimeout(timer);
        timer = setTimeout(() => setIsDeleting(true), delay);
      }
    } else {
      // MODE EFFACEMENT : On retire une lettre
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
      }, deleteSpeed);

      // Si le mot est entièrement effacé, on passe au mot suivant
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, delay]);

  return (
    <div className={styles.container}>

         <span className={styles.span}>
      {currentText}
    
    </span>
    </div>
   
  );
};