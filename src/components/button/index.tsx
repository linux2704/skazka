import { FC } from "react";
import s from "./index.module.css";

export const Button: FC<Props> = ({ name, variant = "primary", className, size = "", color, ...rest }) => {
  return (
    <button style={{ backgroundColor: color }} className={[s[variant], className, s[size]].join(" ")} {...rest}>
      {name}
    </button>
  );
};

interface Props {
  name: string;
  variant?: "primary" | "secondary" | "three";
  className?: string;
  size?: "large";
  color?: string;
  disabled?: boolean;
}
