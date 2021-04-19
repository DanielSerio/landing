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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum nemo voluptatum suscipit, aspernatur commodi necessitatibus architecto rem, id eum quisquam ab eligendi libero aperiam ad quidem voluptate. Temporibus, hic!</p>
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
