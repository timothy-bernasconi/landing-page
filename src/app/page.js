import React from 'react'
import styles from './page.module.scss'
import { Services } from './components/Services'
import Carousel from './components/Carousel'
import CTA from './components/CTA'
import {Hero} from './components/Hero'
import Partenaires from './components/Partenaires'
const carouselPic = [

  { 
    id: 1, 
    title: "Site Web", 
    img: "/assets/realisation.avif",
    desc : "Création site web vitrine pour Alpes Batteries"
   
  },

  { 
    id: 2, 
    title: "Site Web", 
    img: "/assets/realisation2.png",
    desc : "Création Catalogue pour SEDC"
 
  },

  { 
    id: 3, 
    title: "Site Web", 
    img: "/assets/realisation3.avif",
    desc : "Création vidéo pour MyBeers Annemasse"
  
  },

  { 
    id: 4, 
    title: "Site Web", 
    img: "/assets/realisation4.png",
    desc : "Organisation évènements aux Gets"
   
  }


];

const textesAAnimer = [
 
  "Création de contenu",
  "Production vidéo",
  "Gestion Réseaux Sociaux",
  "Publicité Méta"
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
        Le stud x Agir
        <Hero 
          words={textesAAnimer} 
          speed={80}       
          deleteSpeed={40} 
          delay={2500}     
        />
      </h1>
    </div>
    
  </div>
        

         <Services/>
   
         <Carousel data={carouselPic}/>
         <Partenaires/>
         <CTA/>
       
       
   

    
    </div>
  )
}

export default page