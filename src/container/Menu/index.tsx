import styles from './index.module.css';

import { SubHeading } from '@/components/SubHeading';
import * as MenuItem from '@/components/MenuItem';
import { data, images } from '@/constants/portuguese';
import Image from 'next/image';
import { Button } from '@/components/Button';

export function SpecialMenu() {
  return (
    <div className={`${styles.specialMenu} flex-center section-padding`} id="menu">
      <div className={styles.title}>
        <SubHeading title="Menu that fits you palatte" />
        <h3 className="headtext-cormorant">Today's Special</h3>
      </div>
      <div className={styles.menu}>
        <div className={`${styles['menu-wine']} flex-center`}>
          <h4 className="f-cormorant">Wine & Beer</h4>
            {
              data.wines.map((wine, index) => (
                <MenuItem.Root key={index}>
                  <MenuItem.Info name={wine.title} price={wine.price} />
                  <MenuItem.Tags>{wine.tags}</MenuItem.Tags>
                </MenuItem.Root>
              ))
            }
        </div>

        <div className={styles['menu-img']}>
          <Image src={images.menu} alt="Coktail cup" width={150} height={200}  />
        </div>

        <div className={`${styles['menu-cocktails']} flex-center`}>
          <h4 className="f-cormorant">Cocktails</h4>
            {
              data.cocktails.map((cocktail, index) => (
                <MenuItem.Root key={index}>
                  <MenuItem.Info name={cocktail.title} price={cocktail.price} />
                  <MenuItem.Tags>{cocktail.tags}</MenuItem.Tags>
                </MenuItem.Root>
              ))
            }
        </div>
      </div>

      <div className={styles['div-button']}>
        <Button type="button" title="View More" />
      </div>
    </div>
  )
}