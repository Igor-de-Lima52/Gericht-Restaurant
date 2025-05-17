import { images } from "@/constants"
import Image from "next/image"

interface SubheadingProps {
  title: string
}

export function SubHeading({ title }: SubheadingProps) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className="p-cormorant">{title}</p>
      <Image src={images.spoon} alt="spoon" className="spoon-img" />
    </div>
  )
}