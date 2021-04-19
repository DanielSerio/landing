import React from 'react'
import ButtonProps from './ButtonProps'
import './Button.css';

export default function Button({ variant, small, className, children, leftIcon, rightIcon, onClick, ...rest }: ButtonProps) {
  return (
    <button className={`btn ${small ? 'small' :''} ${variant || 'primary'} ${className || ''}`.trim().replace(/\s+/g, ' ')} {...rest} onClick={onClick} onTouchEnd={onClick}>
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </button>
  )
}
