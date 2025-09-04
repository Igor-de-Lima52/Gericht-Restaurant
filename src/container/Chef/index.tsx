import styles from './index.module.css';

import { SubHeading } from '@/components/SubHeading';
import Image from 'next/image';
import { images } from '@/constants/portuguese';
import { altTexts, texts } from './language';

export function Chef() {
  return (
    <section className="app-bg wrapper section-padding" id="chef">
      <div className={`wrapper-img wrapper-img-reverse ${styles.image}`}>
        <Image className="img" src={images.chef} alt={altTexts.altImg} width={634} height={789} />
      </div>
      <div className="wrapper-info">
        <SubHeading title={texts.title} />
        <h3 className="headtext-cormorant">{texts.subtitle}</h3>

        <div className={styles.content}>
          <div className={styles['content-quote']}>
            <Image src={images.quote} alt={altTexts.altQuote} width={49} height={40} />
            <p className="f-opensans">{texts.paragraph1}</p>
          </div>
          <p className="f-opensans">{texts.paragraph2}</p>
        </div>
        <div className={styles.sign}>
          <p>Kevin Luo</p>
          <p className="f-opensans">{texts.paragraph3}</p>
          <Image src={images.sign} alt={altTexts.altSign} width={235} height={83} />
        </div>
      </div>
    </section>
  )
}