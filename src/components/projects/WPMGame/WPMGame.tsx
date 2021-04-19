import React, { useState} from 'react'
import Project from '../../containers/Project/Project';
import { desc, title } from './WPMGameDetails';
import useTimer from './useTimer';
import WPMControls from './Controls/WPMControls';

import checkAccuracy from './accuracy';

export default function WPMGame() {
  const { start, stop, reset, timer, isRunning, elapsed, timeStart } = useTimer();
  const [states, setStats] = useState();
  
  return (
    <Project title={title} desc={desc}>
      <WPMControls isRunning={isRunning} start={start} stop={stop} reset={reset}/>
    </Project>
  )
}
