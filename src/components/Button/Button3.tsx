import React, { ComponentPropsWithoutRef } from 'react'

export type ButtonProps = {
  text: string
} & ComponentPropsWithoutRef<'button'>

export const Button3: React.FC<ButtonProps> = ({ text, ...props }) => {
  return <button {...props}>{text}</button>
}
