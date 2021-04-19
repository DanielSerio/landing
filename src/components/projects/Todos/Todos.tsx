import React, { useState, useMemo } from 'react'
import Project from '../../containers/Project/Project'
import ITodo from './Todo';
import TodoControls from './TodoControls/TodoControls';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import './Todos.css';

export default function Todos() {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      text: 'Walk the Dog',
      complete: false,
      selected: false
    },
    {
      text: 'Feed the Dog',
      complete: true,
      selected: false
    },
    {
      text: 'Make dinner',
      complete: false,
      selected: false
    }
  ]);

  const sortTodos = () => {
    setTodos(todos.sort((a: ITodo, b: ITodo): number => {
      if (b.text < a.text) return -1;
      if (b.text > a.text) return 1;
      return 0;
    }));
  };

  useMemo(() => sortTodos(), [todos]);
  const allSelected = useMemo<boolean>(() => todos.filter(t => t.selected === false).length === 0, [todos]);
  const noneSelected = useMemo<boolean>(() => todos.filter(t => t.selected === true).length === 0, [todos]);
  const noneComplete = useMemo<boolean>(() => todos.filter(t => t.complete === true).length === 0, [todos]);

  const addTodo = (text: string): void => {
    text = text.trim().replace(/\s+/s, ' ');
    const exists: boolean = todos.filter((t: ITodo) => t.text.toUpperCase() === text.toUpperCase()).length > 0;

    if (!exists) {
      setTodos([
        ...todos,
        {
          text,
          complete: false
        }
      ]);
    }
  };
  
  const removeSelected = (): void => setTodos(todos.filter((t: ITodo) => !t.selected));


  const removeCompleted = (): void => setTodos(todos.filter((t: ITodo) => !t.complete));

  const selectAll = (): void => {
    setTodos(todos.map(t => {
      t.selected = true;
      return t;
    }));
  };

  const selectNone = (): void => {
    setTodos(todos.map(t => {
      t.selected = false;
      return t;
    }));
  };

  const updateTodo = (text: string, data: {complete?: boolean, selected?: boolean}): void => {
    const searchString: string = text.toUpperCase();
    const todo: ITodo = todos.filter(t => t.text.toUpperCase() === searchString)[0];
    
    if (data.complete !== undefined) todo.complete = data.complete;
    if (data.selected !== undefined) todo.selected = data.selected;

    setTodos([...todos.filter(t => t.text.toUpperCase() !== searchString), todo]);
  };

  const toggleSelected = (todo: ITodo): void => updateTodo(todo.text, {selected: !todo.selected});

  const toggleComplete = (todo: ITodo): void => {
    const { text, complete } = todo;
    updateTodo(text, {complete: !complete})
  };

  const title: string = 'Todo App';
  const desc: string = 'A simple todo app';

  return (
    <Project className="todos" title={title} desc={desc}>
      {!todos.length && <h3 style={{opacity: 0.67}}>No Todos</h3>}
      {todos.length > 0 && 
        <table>
          <TodoControls 
            todos={todos} 
            selectNone={selectNone} 
            selectAll={selectAll} 
            noneSelected={noneSelected} 
            allSelected={allSelected} 
            noneComplete={noneComplete}
            removeCompleted={removeCompleted} 
            removeSelected={removeSelected} />
          <TodoList 
          todos={todos} 
          toggleSelected={toggleSelected} 
          toggleComplete={toggleComplete}/>
        </table> 
      }         
      <TodoForm addTodo={addTodo}/>
    </Project>
  )
}
