import React from 'react'
import ProjectProps from './ProjectProps'
import './Project.css';

export default function Project({ title, desc, className, children, ...rest}: ProjectProps) {
  return (
    <section className={`project ${className || ''}`.trim()} {...rest}>
      <h1>{title}</h1>
      <p><small>{desc}</small></p>
      {children}
    </section>
  )
}
