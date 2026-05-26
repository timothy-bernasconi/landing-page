"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.scss';

function Carousel({ data }) {
  const extendedData = [data[data.length - 1], ...data, data[0]];
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [slideWidth, setSlideWidth] = useState(0);
  const slideRef = useRef(null);
  const sectionRef = useRef(null);

  // Mesure largeur slide
  useEffect(() => {
    const updateWidth = () => {
      if (slideRef.current) {
        setSlideWidth(slideRef.current.offsetWidth + 20);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // IntersectionObserver
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const nextSlide = () => setActiveIndex((prev) => prev + 1);
  const prevSlide = () => setActiveIndex((prev) => prev - 1);

  const handleTransitionEnd = () => {
    if (activeIndex === 0) {
      setIsTransitioning(false);
      setActiveIndex(data.length);
    }
    if (activeIndex === extendedData.length - 1) {
      setIsTransitioning(false);
      setActiveIndex(1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransitioning(true));
      });
    }
  }, [isTransitioning]);

  const getRealIndex = () => {
    if (activeIndex === 0) return data.length - 1;
    if (activeIndex === extendedData.length - 1) return 0;
    return activeIndex - 1;
  };

  return (
    <section ref={sectionRef} className={styles.carouselContainer}>
      <div
        className={styles.track}
        style={{
          transform: `translateX(${-activeIndex * slideWidth}px)`,
          transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedData.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={`${item.id}-${index}`}
              ref={index === 0 ? slideRef : null}
              className={`${styles.slide} ${isActive ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill={false}
                width={1200}
                height={450}
                priority={index === 1}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className={`${styles.navButton} ${styles.prev}`} onClick={prevSlide}>❮</button>
      <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide}>❯</button>

      <div className={styles.dots}>
        {data.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === getRealIndex() ? styles.activeDot : ''}`}
            onClick={() => setActiveIndex(index + 1)}
          />
        ))}
      </div>
    </section>
  );
}

export default Carousel;