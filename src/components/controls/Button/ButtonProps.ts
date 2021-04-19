import { ComponentPropsWithoutRef, ReactElement } from "react";

declare type Variant = 'primary'|'secondary'|'outline'|'error';

export default interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  variant?: Variant;
  small?: boolean;
  onClick?: () => void;
}