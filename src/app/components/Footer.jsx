import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.container}>

      <div className={styles.top}>
        

        <div className={styles.brand}>
          <img src="/assets/logo-le-stud.png" alt="Le Stud - AGIR en Com" />
          <img src="/assets/logo-agir.png" alt="AGIR en Com" />
        </div>

   
        <div className={styles.contactInfo}>
          <h4>Contact</h4> <br />
          <a href="mailto:contact@agirencom.fr"><p>agirerd@agirencom.com</p> </a> <br />
          <a href="tel:+6 22 58 95 79"><p>06 22 58 95 79</p></a>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} AGIR en Com — Tous droits réservés</p>
        <div className={styles.legalLinks}>
          <Link href="/mentions">Mentions légales</Link>
          <Link href="/politique">Confidentialité</Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer;