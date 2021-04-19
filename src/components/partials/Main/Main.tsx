import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Section from '../../containers/Section/Section'
import ProjectNav from '../../navigation/ProjectNav/ProjectNav'
import GameOfLife from '../../projects/GameOfLife/GameOfLife'
import Todos from '../../projects/Todos/Todos'
import WPMGame from '../../projects/WPMGame/WPMGame'
import './Main.css'

export default function Main() {
  return (
    <main className="content">
      <div className="container">
        <Section className="about" id="about">
          <article>
            <h1>About</h1>
            <p>
              My name is Dan Serio. 
              I have loved web development since I first discovered it at the <a href="https://www.aaart.edu/">American Academy of Art</a> Thirteen years ago.
              I'm very interested in frontend development and I have a particular interest in Typescript and React. I also enjoy working on backend/fullstack projects as well as experimenting with other languages and libraries.
              I like discovering and using the right tools for the job, and I take pleasure in seeking out the simplest solutions possible.
            </p>
          </article>
        </Section>
        <Section className="showcase" id="showcase">
          <h1>Showcase</h1>
          <ProjectNav />
          <Switch>
            <Route path="/todos" component={Todos}/>
            <Route path="/game-of-life" component={GameOfLife}/>
            <Route path="/words-per-minute" component={WPMGame}/>
          </Switch>
        </Section>
      </div>
    </main>
  )
}
