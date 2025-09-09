import styles from './index.module.css';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '@/components/Footer';
import { Newsletter } from '@/components/Footer/Newsletter';
import Image from 'next/image';
import { images } from '@/constants/portuguese';
import { altTexts, texts } from './language';

export function Footer() {
  return (
    <footer className={`${styles.footer} section-padding`}>
      <FooterOverlay />
      {/* <Newsletter /> */}
      <div className={styles.links}>
        <div className={styles['links-contact']}>
          <h4>{texts.subtitle1}</h4>
          <p className="f-opensans">{texts.paragraphAddress}</p>
          <p className="f-opensans">{texts.number1}</p>
          <p className="f-opensans">{texts.number2}</p>
        </div>
        <div className={styles['links-logo']}>
          <Image src={images.gericht} alt="Gericht" width={289} height={83} />
          <p className="f-opensans">{texts.paragraphLogo}</p>
          <Image src={images.spoon} alt={altTexts.altImgLogo} className="spoon-img" />
          <div className={styles['links-icons']}>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className={styles['links-work']}>
          <h4>{texts.subtitle2}</h4>
          <p className="f-opensans">{texts.info1}</p>
          <p className="f-opensans">{texts.info2}</p>
          <p className="f-opensans">{texts.info3}</p>
          <p className="f-opensans">{texts.info4}</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p className='f-opensans'>&copy; {new Date().getFullYear()} {texts.rightsReserved}</p>
      </div>
    </footer>
  )
}