import styles from './Newsletter.module.css';

import { Button } from '../Button';
import { SubHeading } from '../SubHeading';
import { texts } from './language';

export function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles.heading}>
        <SubHeading title={texts.subtitle} />
        <h3 className="headtext-cormorant">{texts.title}</h3>
        <p className="f-opensans">{texts.paragraph}</p>
      </div>
      <form className={`${styles['newsletter-input']} flex-center`}>
        <input type="email" placeholder={texts.inputPlaceholder} />
        <Button title={texts.btnTitle} />
      </form>
    </div>
  )
}
