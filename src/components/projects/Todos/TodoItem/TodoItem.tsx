import React, { useMemo } from 'react'
import Checkbox from '../../../controls/Checkbox/Checkbox'
import TodoItemProps from './TodoItemProps'
import './TodoItem.css';
import ITodo from '../Todo';

export default function TodoItem({ toggleSelected, toggleComplete, selected, complete, text, ...rest}: TodoItemProps) {
  let todo = useMemo<ITodo>(() => ({ text, complete, selected }), [text, complete, selected]);
  const handleToggle = () => toggleSelected(todo);


  return (
    <tr {...rest} className="todo-item">
      <td>
        <div className="cell">
          {<Checkbox onClick={handleToggle} defaultChecked={selected}/>}
        </div>
      </td>
      <td onClick={() => toggleComplete(todo)} onTouchEnd={() => toggleComplete(todo)}>
        <div className="cell" style={todo.complete ? {opacity: 0.5, textDecoration: 'line-through'} : {opacity: 1, textDecoration: 'none'}}>
          {text}
        </div>
      </td>
    </tr>
  )
}
