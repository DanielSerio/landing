import React, { useState } from 'react'
import WPMControlsProps from './WPMControlsProps'
import './WPMControls.css'
import Button from '../../../controls/Button/Button'

export default function WPMControls({ isRunning, stop, start, reset }: WPMControlsProps) {
  const [doneClicked, setDoneClicked] = useState<boolean>(false);
  
  const handleDoneClicked = () => {
    setDoneClicked(true);
    stop();
  };

  const handleRestartClick = () => {
    reset();
    start();
  };


  return (
    <div className="wpm-controls">
      {(!isRunning && !doneClicked) && <Button onClick={() => (start())}>Start</Button>}
      {isRunning && <Button onClick={handleDoneClicked}>Done</Button>}
      {(!isRunning && doneClicked) && <Button onClick={handleRestartClick}>Restart</Button>}
    </div>
  )
}
