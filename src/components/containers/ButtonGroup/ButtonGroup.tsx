import React from 'react'
import ButtonGroupProps from './ButtonGroupProps'
import './ButtonGroup.css'

export default function ButtonGroup({ children, className, ...rest}: ButtonGroupProps) {
  return (
    <div className={`btn-group ${className || ''}`.trim()} {...rest}>{children}</div>
  )
}
