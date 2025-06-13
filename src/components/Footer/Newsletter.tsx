import styles from './Newsletter.module.css';

import { Button } from '../Button';
import { SubHeading } from '../SubHeading';

export function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles.heading}>
        <SubHeading title="Newsletter" />
        <h3 className="headtext-cormorant">Subscribe to our newsletter</h3>
        <p className="f-opensans">And never miss latest Updates!</p>
      </div>
      <form className={`${styles['newsletter-input']} flex-center`}>
        <input type="email" placeholder="Enter your email address" />
        <Button title="Subscribe" />
      </form>
    </div>
  )
}
