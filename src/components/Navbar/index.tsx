"use client"

import { GiHamburgerMenu } from 'react-icons/gi';

import images from "../../constants/images"

import './index.css';
import Image from 'next/image';
import { useState } from 'react';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleToggleMenu () {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Gerítcht</h1>
      </div>
      <ul className="navbar-links">
        <li className="f-opensans"><a href='#home'>Home</a></li>
        <li className="f-opensans"><a href='#about'>About</a></li>
        <li className="f-opensans"><a href='#menu'>Menu</a></li>
        <li className="f-opensans"><a href='#awards'>Awards</a></li>
        <li className="f-opensans"><a href='#contact'>Contact</a></li>
      </ul>
      <div className="navbar-login">
        <a href="#login" className="f-opensans">Log In / Register</a>
        <div />
        <a href="/" className="f-opensans">Book Table</a>
      </div>
      <div className="navbar-smallscreen">
        <button className="navbar-smallscreen-button-open" onClick={handleToggleMenu}>
          <GiHamburgerMenu color="white" />
        </button>
        <div className={`navbar-smallscreen-overlay flex-center ${isMenuOpen ? "show" : "hide"}`} aria-hidden={!isMenuOpen} inert={!isMenuOpen ? true : undefined}>
          <button className="overlay-close navbar-smallscreen-button-close" onClick={handleToggleMenu}>
            <MdOutlineRestaurantMenu />
          </button>
          <ul className="navbar-links-smallscreen" >
            <li className="f-opensans"><a href='#home' onClick={handleToggleMenu}>Home</a></li>
            <li className="f-opensans"><a href='#about' onClick={handleToggleMenu}>About</a></li>
            <li className="f-opensans"><a href='#menu' onClick={handleToggleMenu}>Menu</a></li>
            <li className="f-opensans"><a href='#awards' onClick={handleToggleMenu}>Awards</a></li>
            <li className="f-opensans"><a href='#contact' onClick={handleToggleMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
