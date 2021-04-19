import React from 'react'
import Button from '../../../controls/Button/Button'
import './GameOfLifeControls.css'
import GameOfLifeControlsProps from './GameOfLifeControlsProps'

export default function GameOfLifeControls({ refresh, nextFrame }: GameOfLifeControlsProps) {
  return (
    <div className="game-of-life-controls">
      <Button variant="outline" onClick={refresh}>Refresh</Button>
      <Button onClick={nextFrame}>Next Frame</Button>
    </div>
  )
}
