import { SubHeading } from '@/components/SubHeading';
import './styles.css';
import Image from 'next/image';
import { images } from '@/constants';

export function Chef() {
  return (
    <div className="app-bg wrapper section-padding" id="home">
      <div className="wrapper-img wrapper-img-reverse chef-image">
        <Image className="img" src={images.chef} alt="Chef image" width={634} height={789} />
      </div>
      <div className="wrapper-info info">
        <SubHeading title="Chef's World" />
        <h3 className="headtext-cormorant">What we believe in</h3>

        <div className="chef-content">
          <div className="chef-content-quote">
            <Image src={images.quote} alt="Quote" width={49} height={40} />
            <p className="f-opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit auctor sit</p>
          </div>
          <p className="f-opensans">iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
        </div>
        <div className="chef-sign">
          <p>Kevin Luo</p>
          <p className="f-opensans">Chef & Founder</p>
          <Image src={images.sign} alt="Sign" width={235} height={83} />
        </div>

      </div>
    </div>
  )
}