import React from 'react'
import styles from './page.module.scss'
import { Services } from './components/Services'
import Carousel from './components/Carousel'
import CTA from './components/CTA'
import {Hero} from './components/Hero'
import Partenaires from './components/Partenaires'
import Objectives from './components/Objectives'
import Form from './components/Form'


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
        
              <Services/>      
        
          <Objectives />
          <CTA/> 
    
   
         <Carousel data={carouselPic}/>
         <Partenaires/>
   
         <Form/>
       
       
   

    
    </div>
  )
}

export default page