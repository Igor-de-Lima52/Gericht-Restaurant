import styles from './index.module.css';

import Image from 'next/image';
import { images } from '@/constants/portuguese';

import { SubHeading } from '@/components/SubHeading';
import { Button } from '@/components/Button';
import { altTexts, texts } from './language';

export function Header() {
  return (
    <section className={`${styles.header} wrapper section-padding`} id="Home">
      <div className={`wrapper-info ${styles.info}`}>
        <SubHeading title={texts.subtitle} />
        <h2>{texts.title}</h2>
        <p className="f-opensans" style={{ margin: '2rem 0'}}>{texts.paragraph}</p>
        <Button title={texts.btnTitle} type="button" />
      </div>
      <div className="wrapper-img">
        <Image className="img" src={images.welcome} alt={altTexts.altImg} width={367} height={436} />
      </div>
    </section>
  )
}