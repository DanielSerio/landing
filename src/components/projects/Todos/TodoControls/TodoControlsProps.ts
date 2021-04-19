import { ComponentPropsWithoutRef } from "react";
import ITodo from "../Todo";

export interface TodoControlsProps extends ComponentPropsWithoutRef<'tr'> {
  todos: ITodo[];
  allSelected: boolean;
  noneSelected: boolean;
  noneComplete: boolean;
  selectAll: () => void;
  selectNone: () => void;
  removeSelected: () => void;
  removeCompleted: () => void;
}