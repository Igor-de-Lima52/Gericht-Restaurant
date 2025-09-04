import styles from "./index.module.css"
import { images } from "@/constants/portuguese"
import Image from "next/image"
import { altTextSpoon } from "./language"

interface SubheadingProps {
  title: string
}

export function SubHeading({ title }: SubheadingProps) {
  return (
    <div className={styles.subheading}>
      <p className="f-cormorant">{title}</p>
      <Image src={images.spoon} alt={altTextSpoon} className="spoon-img" width={45} height={30} />
    </div>
  )
}