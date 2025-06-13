import styles from "./index.module.css"

import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <button className={styles['custom-button']} {...props}>
      {title}
    </button>
  )
}