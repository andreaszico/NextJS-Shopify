import { FC } from "react";
import style from "./Swatch.module.css";

interface Props {
  color?: string;
  label?: string;
  variant: "size" | "color" | string;
  onClick: () => void
}

const Swatch: FC<Props> = ({ color, label, variant, ...rest }) => {
  variant = variant?.toLocaleLowerCase();
  return (
    <button
      className={style.root}
      style={color ? { backgroundColor: color } : {}}
      
      {...rest}
    >
      <span></span>
      {variant === "size" ? label : null}
    </button>
  );
};

export default Swatch;
