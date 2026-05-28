"use client"

import React, { useEffect, useRef } from 'react'
import styles from './Services.module.scss'

const nosServices = [
    {
        id: 1,
        name: "Réalisations vidéo",
        desc: "Nous donnons vie à votre image de marque, qu'il s'agisse de capturer votre professionnalisme en portrait ou de sublimer vos produits. Grâce à une maîtrise technique du studio et de la mise en scène, nous créons des visuels sur mesure, conçus pour maximiser votre impact et votre taux de conversion.",
        icon: "fa-solid fa-camera"
    },
    {
        id: 2,
        name: "Capsules digitales",
        desc: "Dynamisez votre communication avec des formats courts et percutants, parfaitement adaptés aux réseaux sociaux. De l'écriture du script au montage final, nous produisons des contenus vidéos immersifs qui captent l'attention en quelques secondes et favorisent l'engagement de votre audience.",
        icon: "fa-solid fa-video"
    },
    {
        id: 3,
        name: "Podcasts",
        desc: "Donnez une voix à votre expertise et créez un lien durable avec votre communauté. Nous vous accompagnons de la conception éditoriale à la post-production sonore pour réaliser des podcasts de haute qualité, qu'il s'agisse de formats narratifs, d'interviews ou de contenus experts.",
        icon: "fa-solid fa-microphone"
    }
];

export const Services = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = cardRefs.current.indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add(styles.visible);
                    }, index * 60);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    cardRefs.current.forEach((card) => {
        if (card) observer.observe(card);
    });

    return () => observer.disconnect();
}, []);

    return (
        
        <div className={styles.container}>
            
            {nosServices.map((p, index) =>
                <li key={p.id}>
                    <div className={styles.wrapper}>
                        <div
                            className={styles.card}
                            ref={el => cardRefs.current[index] = el}
                        >
                            <i className={p.icon}></i>
                            <h2>{p.name}</h2>
                            <p>{p.desc}</p>
                            <a href="tel:+6 22 58 95 79"><button> Nous contacter </button></a>
                        </div>
                    </div>
                </li>
            )}
        </div>
    );
}