import React from 'react'
import SectionProps from './SectionProps'
import './Section.css'

export default function Section({ className, children, ...rest}: SectionProps) {
  return <section className={`section ${className || ''}`.trim()} {...rest}>{children}</section>;
}
