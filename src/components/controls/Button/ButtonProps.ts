import { ComponentPropsWithoutRef, ReactElement } from "react";

export default interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}