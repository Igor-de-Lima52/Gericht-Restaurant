import styles from './index.module.css';

import Image from 'next/image';

import { images } from '@/constants/portuguese';
import { SubHeading } from '@/components/SubHeading';
import { data } from '@/constants/portuguese';
import { Topic } from './topic';
import { texts } from './language';

export function Laurels() {
  return (
    <section className="app-bg wrapper section-padding" id="awards">
      <div>
        <SubHeading title={texts.subtitle} />
        <h3 className="headtext-cormorant">{texts.title}</h3>
        <div className={styles.topics}>
          {
            data.awards.map((award, index) => <Topic key={index} data={award} />)
          }
        </div>
      </div>
      <div className={styles.image}>
        <Image src={images.laurels} alt="" width={555} height={691} />
      </div>
    </section>
  )
}