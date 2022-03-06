import { HTMLProps } from "react";

export interface ButtonProps extends HTMLProps<HTMLAnchorElement> {
  type?: "primary" | "secondary" | "link";
}
