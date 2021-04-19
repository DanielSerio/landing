import React from 'react'
import ITodo from '../Todo'
import TodoItem from '../TodoItem/TodoItem'
import TodoListProps from './TodoListProps'
import './TodoList.css';
import { useEffect } from 'react';

export default function TodoList({ todos, toggleComplete, toggleSelected }: TodoListProps) {

  useEffect(() => { console.log(todos)}, [todos]);
  return (
    <tbody className="todo-list">
      {todos.map((todo: ITodo) => {
        const { text, complete, selected } = todo;
        return <TodoItem key={text} text={text} complete={complete} selected={selected} toggleSelected={toggleSelected} toggleComplete={toggleComplete}/>
      })}
    </tbody>
  )
}
