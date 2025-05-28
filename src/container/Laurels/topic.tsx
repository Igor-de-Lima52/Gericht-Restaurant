import Image, { StaticImageData } from "next/image";

import "./topic.css"

interface TopicProps {
  data: {
    imgUrl: StaticImageData
    title: string
    subtitle: string
  }
}

export function Topic({ data }: TopicProps) {
  return (
    <div className="topic">
      <Image src={data.imgUrl} alt="" width={79} height={79} />
      <div className="topic-text">
        <h5 className="f-cormorant">{data.title}</h5>
        <p className="f-opensans">{data.subtitle}</p>
      </div>
    </div>
  )
}