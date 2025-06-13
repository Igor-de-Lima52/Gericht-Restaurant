import Image from "next/image"
import "./styles.css"
import { images } from "@/constants"
import { SubHeading } from "@/components/SubHeading"
import { Button } from "@/components/Button"

export function FindUs() {
  return (
    <div className="findus flex-center app-bg section-padding" id="contact">
      <div className="findus-info">
        <SubHeading title="Contact" />
        <h3 className="headtext-cormorant">Find us</h3>
        <div className="findus-text">
          <p className="f-opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <h5 className="f-cormorant">Opening hours</h5>
          <span className="f-opensans">Mon - Fri: 10:00 am - 02:00 am</span>
          <span className="f-opensans">Sat - Sun: 10:00 am - 03:00 am</span>
        </div>
        <Button title="Visit us"/>
      </div>
      <div className="findus-image">
        <Image src={images.findus} alt="A drink made with lemon and mint." width={667} height={736} />
      </div>
    </div>
  )
}