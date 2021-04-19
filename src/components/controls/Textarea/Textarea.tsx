import React, { ComponentPropsWithRef } from 'react'
import './Textarea.css'

export default function Textarea({className, ...rest}: ComponentPropsWithRef<'textarea'>) {
  return <textarea className={`textarea ${className || ''}`.trim()} {...rest}></textarea>
}
