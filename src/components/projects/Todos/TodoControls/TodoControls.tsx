import React, { useState } from 'react'
import Button from '../../../controls/Button/Button'
import { TodoControlsProps } from './TodoControlsProps'
import ButtonGroup from '../../../containers/ButtonGroup/ButtonGroup'
import './TodoControls.css'

export default function TodoControls({ noneComplete, noneSelected, allSelected, selectAll, selectNone, removeCompleted, removeSelected }: TodoControlsProps) {

  return (
    <thead className="todo-controls">
      <tr>
       <td>
         <div className="controls-cell">
          {allSelected && <Button className="subtle"  small={true} onClick={selectNone}>Select None</Button>}
          {!allSelected && <Button className="subtle"  small={true} onClick={selectAll} > Select All</Button>}
         </div>
       </td>
       <td>
         <ButtonGroup className="controls-cell">
         <Button className="subtle" small={true} variant="error" disabled={noneComplete} onClick={removeCompleted}>Remove Complete</Button>
          <Button className="subtle"  small={true} variant="error" disabled={noneSelected} onClick={removeSelected}>Remove Selected</Button>
         </ButtonGroup>
       </td>
      </tr>
    </thead>
  )
}
