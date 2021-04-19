import { ComponentPropsWithoutRef } from "react";
import ITodo from "../Todo";

export default interface TodoItemProps extends ITodo, ComponentPropsWithoutRef<'tr'> {
  toggleSelected: (todo: ITodo) => void;
  toggleComplete: (todo: ITodo) => void;
}