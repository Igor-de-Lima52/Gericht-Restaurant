"use client"

import Link from 'next/link';
import styles from './index.module.css';

import { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { links } from './language';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleToggleMenu () {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Gerítcht</h1>
      </div>
      <ul className={styles.links}>
        {
          links.map((link, index) => <li className="f-opensans" key={index}><Link href={`#${link}`}>{link}</Link></li>)
        }
        
        {/* <li className="f-opensans"><a href='#about'>About</a></li>
        <li className="f-opensans"><a href='#menu'>Menu</a></li>
        <li className="f-opensans"><a href='#awards'>Awards</a></li>
        <li className="f-opensans"><a href='#contact'>Contact</a></li> */}
      </ul>
      {/* <div className={styles.login}>
        <Link href="#login" className="f-opensans">Log In / Register</Link>
        <div />
        <Link href="/" className="f-opensans">Book Table</Link>
      </div> */}
      <div className={styles.smallscreen}>
        <button className={styles['smallscreen-button-open']} onClick={handleToggleMenu}>
          <GiHamburgerMenu color="white" />
        </button>
        <div className={`${styles['smallscreen-overlay']} flex-center ${isMenuOpen ? styles.show : styles.hide}`} aria-hidden={!isMenuOpen} inert={!isMenuOpen ? true : undefined}>
          <button className={styles['smallscreen-button-close']} onClick={handleToggleMenu}>
            <MdOutlineRestaurantMenu />
          </button>
          <ul className={styles['links-smallscreen']}>
            {
              links.map((link, index) => <li className="f-opensans" key={index}><Link href={`#${link}`} onClick={handleToggleMenu}>{link}</Link></li>)
            }

            {/* <li className="f-opensans"><a href='#home' onClick={handleToggleMenu}>Home</a></li>
            <li className="f-opensans"><a href='#about' onClick={handleToggleMenu}>About</a></li>
            <li className="f-opensans"><a href='#menu' onClick={handleToggleMenu}>Menu</a></li>
            <li className="f-opensans"><a href='#awards' onClick={handleToggleMenu}>Awards</a></li>
            <li className="f-opensans"><a href='#contact' onClick={handleToggleMenu}>Contact</a></li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
