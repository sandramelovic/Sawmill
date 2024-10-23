import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpeg'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
      <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={() =>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>O NAMA</h3>
        <h2>Ko smo mi?</h2>
        <p>Melović DOO predstavlja spoj tradicije i savremene tehnologije u obradi drveta, kompaniju koja generacijama unazad neguje veštinu i stručnost u radu s prirodnim materijalima. Naš pristup je zasnovan na dubokom poštovanju prema drvetu kao sirovini, kao i na želji da svaki komad koji prođe kroz našu pilanu bude obrađen sa maksimalnom preciznošću i pažnjom prema detaljima. Koristimo najsavremenije metode obrade, ali čuvamo mudrost starih majstora, čineći svaki proces optimalnim i efikasnim, uz minimalan uticaj na životnu sredinu. </p>
        <p>Naša misija je da spojimo prirodnu snagu i lepotu drveta sa tehnološkim inovacijama, kako bismo stvorili proizvode koji ne samo da traju, već i ostavljaju trag kroz vreme.</p>
        <p>Ponosni smo što možemo da kažemo da su naši proizvodi oslonac mnogih kuća, objekata i projekata, a naši klijenti znaju da je Melović DOO sinonim za pouzdanost, kvalitet i dugovečnost. Sa fokusom na održivost i ekološki prihvatljive prakse, trudimo se da naš rad ima pozitivan uticaj na zajednicu i prirodu, stvarajući vrednosti koje prevazilaze trenutni trenutak i ostavljaju nasleđe za buduće generacije.</p>
      </div>
    </div>
  )
}

export default About
