import { ComponentProps } from 'react';
import './index.css';

type RootProps = ComponentProps<'div'>

type InfoProps = ComponentProps<'div'> & {
  name: string
  price: string
}

type SpanProps = ComponentProps<'span'>

export function Root(props: RootProps) {
  return (
    <div className="item-root" {...props} />
  )
}

export function Info({ name, price, ...props }: InfoProps) {
  return (
    <div className="item-info" {...props}>
      <div className="div-name">
        <Name>{name}</Name>
      </div>
      <div className="item-line"/>
      <Price>{price}</Price>
    </div>
  )
}

function Name(props: SpanProps) {
  return (
    <span className="item-name f-cormorant" {...props} />
  )
}

function Price(props: SpanProps) {
  return (
    <span className="item-price f-cormorant" {...props} />
  )
}

export function Tags(props: SpanProps) {
  return (
    <span className="item-tags f-opensans" {...props} />
  )
}
