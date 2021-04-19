import React, { ChangeEvent, FormEvent, RefObject, useState, useRef } from 'react'
import Button from '../../../controls/Button/Button';
import Input from '../../../controls/Input/Input'
import TodoFormProps from './TodoFormProps';
import './TodoForm.css';

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [todo, setTodo] = useState<string>('');
  const ref: RefObject<HTMLFormElement> = useRef(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodo(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTodo('');
    addTodo(todo);
    if (ref.current) ref.current.reset(); 
  };

  return (
    <form ref={ref} className="todo-form" onSubmit={handleSubmit}>
      <Input type="text" name="todo" onChange={handleChange} defaultValue={todo}/>
      <Button type="submit" style={{marginLeft: '1rem'}} disabled={todo.length === 0 ? true : false}>Add</Button>
    </form>
  )
}
