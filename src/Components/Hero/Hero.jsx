import React from 'react'
import './Hero.css'
import arrow_icon from '../../assets/arrow_icon.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Tradicionalna snaga i vrhunska preciznost u obradi drveta</h1>
        <p>Melović DOO je kompanija sa dubokim korenima u tradiciji 
          obrade drveta, gde svaka faza proizvodnje odražava posvećenost 
          kvalitetu i preciznosti. Koristeći modernu tehnologiju, a 
          oslanjajući se na bogato iskustvo, osiguravamo da svaki komad 
          drveta bude obrađen s maksimalnom pažnjom i stručnom veštinom.</p>
        <li><Link to='about' smooth={true} offset={-150} duration={500} className='btn'>Pročitaj više <img src={arrow_icon} alt="" /></Link></li>

        </div>
    </div>
  )
}

export default Hero
