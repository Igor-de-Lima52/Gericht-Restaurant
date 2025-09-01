import Image from "next/image"
import "./styles.css"
import { images } from "@/constants/portuguese"
import { SubHeading } from "@/components/SubHeading"
import { Button } from "@/components/Button"
import { altTexts, texts } from "./language"

export function FindUs() {
  return (
    <div className="findus flex-center app-bg section-padding" id="contact">
      <div className="findus-info">
        <SubHeading title={texts.title} />
        <h3 className="headtext-cormorant">{texts.subtitle}</h3>
        <div className="findus-text">
          <p className="f-opensans">{texts.paragraph}</p>
          <h5 className="f-cormorant">{texts.info}</h5>
          <span className="f-opensans">{texts.span1}</span>
          <span className="f-opensans">{texts.span2}</span>
        </div>
        <Button title={texts.buttonTitle} />
      </div>
      <div className="findus-image">
        <Image src={images.findus} alt={altTexts.altImg} width={667} height={736} />
      </div>
    </div>
  )
}