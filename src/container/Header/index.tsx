import { SubHeading } from '@/components/SubHeading';
import './styles.css';

import { images } from '@/constants';
import Image from 'next/image';

export function Header() {
  return (
    <div className="header wrapper section-padding" id="home">
      <div className="wrapper-info">
        <SubHeading title="Chase the new flavour" />
        <h1>The Key to Fine Dining</h1>
        <p className="p-opensans" style={{ margin: '2rem 0'}}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
        </p>
        <button type="button" className="custom-button">Explore Menu</button>
      </div>
      <div className="wrapper-img">
        <Image src={images.welcome} alt="Header img" width={667} height={736} />
      </div>
    </div>
  )
}