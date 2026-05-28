"use client";
import React, { useEffect, useRef } from 'react';
import styles from './AvisAgence.module.scss';

const AvisAgence = ({listeAvis }) => {

  const itemsRef = useRef([]);

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

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles['container-avis']}>
      
      <div className={styles.group}> 
        {listeAvis.map((rev, index) => (
          <div 
            key={rev.id} 
            ref={(el) => (itemsRef.current[index + 1] = el)}
            className={`${styles.card} ${styles['review-card']}`}
          >
            <div className={styles['quote-icon']}>“</div>
            <div className={styles.stars}>
              {"★".repeat(rev.star)}{"☆".repeat(5 - rev.star)}
            </div>
            <p className={styles['review-text']}>{rev.text}</p>
            <span className={styles['client-name']}>{rev.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvisAgence;