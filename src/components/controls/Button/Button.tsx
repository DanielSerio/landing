import React from 'react'
import ButtonProps from './ButtonProps'

export default function Button({ className, children, leftIcon, rightIcon, ...rest }: ButtonProps) {
  return (
    <button className={`btn ${className || ''}`.trim()} {...rest}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  )
}
