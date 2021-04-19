import { ComponentPropsWithoutRef } from "react";
import ITodo from "../Todo";

export default interface TodoListProps extends ComponentPropsWithoutRef<'tbody'> {
  todos: ITodo[];
  toggleComplete: (todo: ITodo) => void;
  toggleSelected: (todo: ITodo) => void;
}