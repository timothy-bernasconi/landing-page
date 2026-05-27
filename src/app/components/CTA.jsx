"use client"
import React, { useEffect, useRef } from 'react'
import styles from './CTA.module.scss'


const CTA = () => {
  const cardRef = useRef(null);

 useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                    observer.unobserve(entry.target); 
                }
            });
        },
        { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
}, []);

  return (
    <div className={styles.container}>
      <div className={styles.card} ref={cardRef}>
        <h2>Prêt à booster votre com ?</h2>
        <p>Votre projet mérite une communication à la hauteur. Parlons-en ensemble et construisons une stratégie qui vous ressemble.</p>
        <a href="#form"><button>Nous contacter</button></a>
      </div>
    </div>
  )
}

export default CTA