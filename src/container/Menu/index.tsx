import styles from './index.module.css';

import { SubHeading } from '@/components/SubHeading';
import * as MenuItem from '@/components/MenuItem';
import { data, images } from '@/constants/portuguese';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { altTexts, texts } from './language';

export function SpecialMenu() {
  return (
    <div className={`${styles.specialMenu} flex-center section-padding`} id="Menu">
      <div className={styles.title}>
        <SubHeading title={texts.subtitle1} />
        <h3 className="headtext-cormorant">{texts.title}</h3>
      </div>
      <div className={styles.menu}>
        <div className={`${styles['menu-wine']} flex-center`}>
          <h4 className="f-cormorant">{texts.subtitle2}</h4>
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
          <Image src={images.menu} alt={altTexts.altImg} width={150} height={200}  />
        </div>

        <div className={`${styles['menu-cocktails']} flex-center`}>
          <h4 className="f-cormorant">{texts.subtitle3}</h4>
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
        <Button type="button" title={texts.btnTitle} />
      </div>
    </div>
  )
}