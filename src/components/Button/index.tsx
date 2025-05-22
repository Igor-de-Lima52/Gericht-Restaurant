import { ButtonHTMLAttributes, HTMLProps } from "react"
import "./index.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <button className="custom-button" {...props}>
      {title}
    </button>
  )
}