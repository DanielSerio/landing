import React from 'react'
import InputProps from './InputProps'
import './Input.css';

export default function Input({className, ...rest}: InputProps) {
  return <input className={`input primary ${className || ''}`.trim()} {...rest}/>
}
