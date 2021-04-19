import React from 'react'
import WPMControlsProps from './WPMControlsProps'
import './WPMControls.css'
import Button from '../../../controls/Button/Button'

export default function WPMControls({}: WPMControlsProps) {
  return (
    <div>
      <Button></Button>
      <Button></Button>
      <Button></Button>
    </div>
  )
}
