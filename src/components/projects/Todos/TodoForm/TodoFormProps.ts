import { ComponentPropsWithoutRef } from "react";

export default interface TodoFormProps extends ComponentPropsWithoutRef<'form'> {
  addTodo: (text: string) => void;
}