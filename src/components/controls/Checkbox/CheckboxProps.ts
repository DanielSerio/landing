import { ComponentPropsWithoutRef } from "react";

export default interface CheckboxProps {
  defaultChecked?: boolean;
  onClick: (checked: boolean) => void; 
}