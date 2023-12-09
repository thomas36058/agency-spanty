import { title } from 'process'
import React from 'react'

type ButtonProps = {
    title: string;
    variant: string;
}

function Button({ title, variant }: ButtonProps) {
  return (
    <button
        className={`${variant}`}
    >
      {title}
    </button>
  )
}

export default Button