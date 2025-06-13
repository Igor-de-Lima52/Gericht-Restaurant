import styles from './index.module.css';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '@/components/Footer';
import { Newsletter } from '@/components/Footer/Newsletter';
import Image from 'next/image';
import { images } from '@/constants';

export function Footer() {
  return (
    <footer className={`${styles.footer} section-padding`}>
      <FooterOverlay />
      <Newsletter />
      <div className={styles.links}>
        <div className={styles['links-contact']}>
          <h4>Contact Us</h4>
          <p className="f-opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="f-opensans">+1 212-344-1230</p>
          <p className="f-opensans">+1 212-555-1230</p>
        </div>
        <div className={styles['links-logo']}>
          <Image src={images.gericht} alt="Gericht" width={289} height={83} />
          <p className="f-opensans">"The best way to find yourself is to lose yourself inn the service of others."</p>
          <Image src={images.spoon} alt="Spoon" className="spoon-img" />
          <div className={styles['links-icons']}>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className={styles['links-work']}>
          <h4>Working Hours</h4>
          <p className="f-opensans">Monday-Friday:</p>
          <p className="f-opensans">08:00 am - 12:00 am</p>
          <p className="f-opensans">Saturday-Sunday:</p>
          <p className="f-opensans">07:00 am - 11:00 pm</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p className='f-opensans'>&copy; {new Date().getFullYear()} Gerítch. All rights reserved.</p>
      </div>
    </footer>
  )
}