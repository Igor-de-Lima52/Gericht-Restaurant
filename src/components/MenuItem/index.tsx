import styles from './index.module.css';

import { ComponentProps } from 'react';

type RootProps = ComponentProps<'div'>

type InfoProps = ComponentProps<'div'> & {
  name: string
  price: string
}

type SpanProps = ComponentProps<'span'>

export function Root(props: RootProps) {
  return (
    <div className={styles['item-root']} {...props} />
  )
}

export function Info({ name, price, ...props }: InfoProps) {
  return (
    <div className={styles['item-info']} {...props}>
      <div className={styles['div-name']}>
        <Name>{name}</Name>
      </div>
      <div className={styles['item-line']} />
      <Price>{price}</Price>
    </div>
  )
}

function Name(props: SpanProps) {
  return (
    <span className={`${styles['item-name']} f-cormorant`} {...props} />
  )
}

function Price(props: SpanProps) {
  return (
    <span className={`${styles['item-price']} f-cormorant`} {...props} />
  )
}

export function Tags(props: SpanProps) {
  return (
    <span className={`${styles['item-tags']} f-cormorant`} {...props} />
  )
}
