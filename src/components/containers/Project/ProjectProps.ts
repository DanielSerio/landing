import { ComponentPropsWithoutRef } from "react";

export default interface ProjectProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  desc: string;
}