import React from 'react'
import { NavLink } from 'react-router-dom'
import './ProjectNav.css'
import './ProjectNav.dark.css'

export default function ProjectNav() {
  return (
    <nav className="project-nav">
      <NavLink to={'/todos'}>Todo App</NavLink>
      <NavLink to={'/game-of-life'}>Game of Life</NavLink>
      <NavLink to={'/words-per-minute'}>Words per minute</NavLink>
    </nav>
  )
}
