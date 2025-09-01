"use client"

import styles from './index.module.css';

import { SubHeading } from '@/components/SubHeading';
import { Button } from '@/components/Button';
import { useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';
import { images } from '@/constants/portuguese';
import Image from 'next/image';

const imgs = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  function handleScroll(direction: string) {
    const { current } = scrollRef;

    if(direction === 'left') {
      current!.scrollLeft -= 300;
    }
    else {
      current!.scrollLeft += 300;
    }
  }

  return (
    <section className={`${styles.gallery} flex-center`}>
      <div className={styles.info}>
        <SubHeading title="Instagram" />
        <h3 className='headtext-cormorant'>Photo Gallery</h3>
        <p className='f-opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <Button title="View more" type="button" />
      </div>
      <div className={styles.imgs}>
        <div className={styles['imgs-container']} ref={scrollRef}>
          {
            imgs.map((img, index) => (
              <div className={`${styles['img-card']} flex-center`} key={index + 1}>
                <Image src={img} alt='' width={301} height={447} />
                <BsInstagram className={styles['img-icon']} />
              </div>
            ))
          }
        </div>
        <div className={styles['imgs-arrows']}>
          <BsArrowLeftShort onClick={() => handleScroll('left')} />
          <BsArrowRightShort onClick={() => handleScroll('right')} />
        </div>
      </div>
    </section>
  )
}