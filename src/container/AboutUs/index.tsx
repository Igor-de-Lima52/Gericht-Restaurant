import styles from './index.module.css';

import Image from 'next/image';

import { images } from '@/constants';
import { Button } from '@/components/Button';

export function AboutUs() {
  return (
    <section className={`${styles.aboutus} app-bg flex-center section-padding`} id="about">
      <div className={`${styles.overlay} flex-center`}>
        <Image src={images.G} alt="G letter" width={191} height={215} />
      </div>

      <div className={`${styles.content} flex-center`}>
        <div className={styles['aboutus-content']}>
          <h3 className="headtext-cormorant">About Us</h3>
          <Image src={images.spoon} alt="About-spoon" className="spoon-img" width={45} height={30} />
          <p className="f-opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <Button title="Know More" />
        </div>
        
        <div className={`${styles.knife} flex-center`}>
          <Image src={images.knife} alt="Knife" width={54} height={503} />
        </div>

        <div className={styles['history-content']}>
          <h3 className="headtext-cormorant">Our History</h3>
          <Image src={images.spoon} alt="About-spoon" className="spoon-img" width={45} height={30} />
          <p className="f-opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <Button title="Know More" />
        </div>
      </div>
    </section>
  )
}