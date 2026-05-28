import React from 'react'
import styles from './page.module.scss'
import { Services } from './components/Services'
import Carousel from './components/Carousel'
import CTA from './components/CTA'
import {Hero} from './components/Hero'
import Partenaires from './components/Partenaires'
import Objectives from './components/Objectives'
import Form from './components/Form'
import AvisAgence from './components/AvisAgence'


const carouselPic = [
  { 
    id: 1, 
    title: "Production Vidéo", 
    img: "/assets/realisation5.jpg",
    desc: "Captation et montage de formats courts"
  },
  { 
    id: 2, 
    title: "Studio Podcast", 
    img: "/assets/realisation1.jpg",
    desc: "Enregistrement et post-production audio"
  },
  { 
    id: 3, 
    title: "Shooting Corporate", 
    img: "/assets/realisation3.jpg",
    desc: "Portraits professionnels et image de marque"
  },
  { 
    id: 4, 
    title: "Photographie Produit", 
    img: "/assets/realisation4.jpg",
    desc: "Visuels studio haute définition"
  }
];

const textesAAnimer = [
 
  "Création de contenu",
  "Production vidéo",
  "Gestion Réseaux Sociaux",
  "Publicité Méta"
];

const avisAnnemasse = [
  { id: 1, name: "Audrey D.", star: 5, text: "Arnault est le synonyme de réactivité et professionnalisme. Il est efficace et passionné. La qualité de son travail est incroyable. Je suis très reconnaissante d'avoir fait appel à son service. Je recommande à 10000%" },
  { id: 2, name: "Florian R.", star: 5, text: "Cette agence de communication événementielle et vidéo est très professionnelle et compétente. Ils ont su répondre à toutes mes demandes et ont créé une vidéo promotionnelle qui a eu un impact significatif sur mon entreprise." },
  { id: 3, name: "Loïc B.", star: 5, text: "C'est la deuxième fois que je sollicite l'équipe d'Agir pour une prestation de shooting photo. Arnauld et son équipe ont parfaitement su répondre à mes attentes et mes besoins. Les visuels livrés sont de super qualité et parfaits pour communiquer mon travail sur les réseaux. Merci à eux, je recommande leurs services !" },
];

const page = () => {
  return (
    <div className={styles.container}>

      
     <div className={styles.content}>
        
    <video 
      src="/assets/bg-video.mp4" 
      autoPlay 
      loop 
      muted 
      playsInline 
      className={styles.bgVideo}
    /> 
    

    <div className={styles.textContent}>
      <h1 className={styles.mainTitle}> 
        Le Stud by Agir
        <Hero 
          words={textesAAnimer} 
          speed={80}       
          deleteSpeed={40} 
          delay={2500}     
        />
      </h1>
    </div>
    
  </div>
        
        <h2 className={styles.secondTitle}>Passez à la vitesse supérieure avec Le Stud</h2>
              <Services/>      
        
          {/* <Objectives /> */}
         
    
   
         <Carousel data={carouselPic}/>
         <CTA/> 
         <h2 className={styles.secondTitle}>Des collaborations qui marquent</h2>
         <AvisAgence
         titre = "Vos retours du Stud'"
         listeAvis={avisAnnemasse}/>
         <h2 className={styles.secondTitle}>Ils nous font confiance</h2>
         <Partenaires/>
          <h2 className={styles.secondTitle}>Donnons vie à votre projet</h2>
         <Form/>
       
       
   

    
    </div>
  )
}

export default page