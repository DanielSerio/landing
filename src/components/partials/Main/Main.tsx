import React from 'react'
import { Switch } from 'react-router-dom'
import Section from '../../containers/Section/Section'
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
          <Switch>

          </Switch>
        </Section>
      </div>
    </main>
  )
}
