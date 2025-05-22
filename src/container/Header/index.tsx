import Image from 'next/image';
import './styles.css';

import { images } from '@/constants';

import { SubHeading } from '@/components/SubHeading';
import { Button } from '@/components/Button';

export function Header() {
  return (
    <div className="header wrapper section-padding" id="home">
      <div className="wrapper-info">
        <SubHeading title="Chase the new flavour" />
        <h2>The Key to Fine Dining</h2>
        <p className="f-opensans" style={{ margin: '2rem 0'}}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
        </p>
        <Button title="Explore Menu" type="button" />
      </div>
      <div className="wrapper-img">
        <Image className="img" src={images.welcome} alt="Header img" width={367} height={436} />
      </div>
    </div>
  )
}