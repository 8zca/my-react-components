import { css } from '@emotion/react'
import React, { ComponentPropsWithoutRef } from 'react'

export type ButtonProps = {
  text: string
} & ComponentPropsWithoutRef<'button'>

const style = css({
  background: '000'  
})

export const Button3: React.FC<ButtonProps> = ({ text, ...props }) => {
  return <button {...props} css={style}>{text}</button>
}
