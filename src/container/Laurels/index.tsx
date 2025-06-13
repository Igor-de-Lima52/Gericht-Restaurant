import styles from './index.module.css';

import Image from 'next/image';

import { images } from '@/constants';
import { SubHeading } from '@/components/SubHeading';
import { data } from '@/constants';
import { Topic } from './topic';

export function Laurels() {
  return (
    <section className="app-bg wrapper section-padding" id="awards">
      <div>
        <SubHeading title='Awards & Recognition' />
        <h3 className="headtext-cormorant">Our Laurels</h3>
        <div className={styles.topics}>
          {
            data.awards.map((award, index) => <Topic key={index} data={award} />)
          }
        </div>
      </div>
      <div className={styles.image}>
        <Image src={images.laurels} alt="A grilled chicken with some asparagus and cherry tomatoes." width={555} height={691} />
      </div>
    </section>
  )
}