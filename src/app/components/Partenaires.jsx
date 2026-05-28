import React from 'react'
import styles from './Partenaires.module.scss'
import Image from 'next/image'

const logos = [
  { id: 1, src: '/assets/clients/occitane.svg', alt: 'Occitane'},
  { id: 2, src: '/assets/clients/mybeers.svg', alt: 'MyBeers' },
  { id: 3, src: '/assets/clients/florindo.svg', alt: 'Florindo' },
  { id: 4, src: '/assets/clients/leztroy.svg', alt: 'Leztroy' },
  { id: 5, src: '/assets/clients/manor.svg', alt: 'Manor' },
  { id: 6, src: '/assets/clients/alpes-batteries.svg', alt: 'Alpes Batteries' },
  { id: 7, src: '/assets/clients/baud-restaurant.svg', alt: 'Baud Restuarant' },
  { id: 8, src: '/assets/clients/fnac.svg', alt: 'Fnac' },
  { id: 9, src: '/assets/clients/one-scope.svg', alt: 'One Scope' },
  { id: 10, src: '/assets/clients/quadra.svg', alt: 'Quadra' },
  { id: 11, src: '/assets/clients/moteur-incentive.svg', alt: 'Moteur Incentive' },
  { id: 12, src: '/assets/clients/valeo.svg', alt: 'Valeo' },
  { id: 13, src: '/assets/clients/peugeot.svg', alt: 'Peugeot' },
  { id: 14, src: '/assets/clients/les-gets.svg', alt: 'Les Gets' },
  { id: 15, src: '/assets/clients/jean-lain.svg', alt: 'Jean Lain' },
  { id: 16, src: '/assets/clients/car-alpes.svg', alt: 'Car Alpes' },
  { id: 17, src: '/assets/clients/h20.svg', alt: 'H20' },
  { id: 18, src: '/assets/clients/ipac.svg', alt: 'Ipac' },
  { id: 19, src: '/assets/clients/xnv.svg', alt: 'Excenevex Beach Festival' },
  { id: 20, src: '/assets/clients/astra-musique.svg', alt: 'Astra Musique Festival' },
  
];

const mid = Math.ceil(logos.length / 2);
const row1 = logos.slice(0, mid);
const row2 = logos.slice(mid);

const Clients = () => {
  return (
    <section className={styles.container}>

          <div className={styles.band}>
        <div className={styles.trackRight}>
          {[...row2, ...row2].map((logo, i) => (
            <div key={i} className={styles.logo}>
              <Image src={logo.src} alt={logo.alt} width={140} height={60} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Clients