import React from 'react'
import styles from './Objectives.module.scss'

const Objectives = () => {

const objArray = [

    {
        id :1,
        name : "Proximité Locale",
        icon : "fa-solid fa-location-dot"
    },

    {
        id :2,
        name : "Autonomie Créative",
        icon : "fa-regular fa-lightbulb"
    },

    {
        id :3,
        name : "Expertise 360°",
        icon : "fa-regular fa-star"
    },

     {
        id :4,
        name : "Expertise 360°",
        icon : "fa-solid fa-coins"
    }


]




  return (
    <div className={styles.container}>

        {objArray.map((serv, i) => (

            <div key={i} id={serv.id} className={styles.wrapper}> 
             <ul>
                <i className={serv.icon}></i> 
             </ul>
            
            <h2>{serv.name}</h2>
           
            
            </div>
        ))}



    </div>
  )
}

export default Objectives