"use client"

import React, { useEffect, useRef } from 'react'
import styles from './Services.module.scss'

const nosServices = [
    {
        id: 2,
        name: "Création module Formation",
        desc: "Prenez enfin le contrôle de votre stratégie numérique avec nos programmes de formation sur mesure. Que vous cherchiez à dompter les réseaux sociaux, valoriser vos offres ou bâtir une image forte, notre équipe vous guide pas à pas. Profitez d'un apprentissage ciblé pour ne plus jamais dépendre de prestataires externes.",
        icon: "fa-solid fa-person-chalkboard"
    },
    {
        id: 3,
        name: "Création de photos et vidéos",
        desc: "Notre équipe de vidéastes et photographes donne vie à votre marque avec des visuels de haute qualité. De la scénarisation à la post-production, nous gérons votre projet de A à Z. Que ce soit pour des publicités, des contenus dynamiques ou des reportages, profitez de formats adaptés pour booster votre visibilité en ligne.",
        icon: "fa-solid fa-video"
    },
    {
        id: 4,
        name: "Gestion de réseaux sociaux",
        desc: "Une présence active et planifiée sur vos plateformes reste la clé pour affirmer votre image de marque. Notre agence conçoit votre identité numérique pour séduire, engager et fidéliser de nouveaux publics. Nous définissons ensemble vos objectifs média afin de bâtir des campagnes sur mesure, adaptées à votre philosophie.",
        icon: "fa-solid fa-users"
    },
    {
        id: 5,
        name: "Création d'évènements",
        desc: "Vous projetez d'organiser une animation commerciale ou un séminaire marquant pour vos collaborateurs ? De la planification logistique à la stratégie de communication globale, nous orchestrons chaque étape avec rigueur. Confiez-nous vos lancements de produits, conférences ou soirées thématiques pour en garantir le succès.",
        icon: "fa-solid fa-calendar-days"
    },
    {
        id: 6,
        name: "Séance photo de ski",
        desc: "Vivez l'expérience ultime de la photographie de ski au cœur de la Haute-Savoie avec notre agence. Passionnés de glisse et experts de l'image, nous captons l'adrénaline de vos descentes et la splendeur des paysages enneigés. Obtenez des visuels d'exception pour vos souvenirs personnels ou pour vos campagnes commerciales.",
        icon: "fa-solid fa-person-skiing"
    },
    {
        id: 7,
        name: "Conseil visibilité et marketing",
        desc: "Se démarquer sur un marché saturé est un défi complexe pour chaque entreprise. Notre service d'accompagnement stratégique est spécialement pensé pour maximiser votre impact commercial. Nous analysons vos besoins réels et déployons des plans d'action concrets pour vous aider à atteindre vos objectifs de croissance futurs.",
        icon: "fa-brands fa-adversal"
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
                            <a href="https://www.agirencom.com/nos-services/" target="_blank"><button>En savoir plus</button></a>
                        </div>
                    </div>
                </li>
            )}
        </div>
    );
}