import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', () =>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () =>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Početna</Link></li>
        <li><Link to='programs' smooth={true} offset={-700} duration={500}>Usluge</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>O nama</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Galerija</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Utisci</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Kontakt</Link></li>
      </ul>
      <img src={menu_icon} className='menu-icon' onClick={toggleMenu} alt="" />
    </nav>
  )
}

export default Navbar
