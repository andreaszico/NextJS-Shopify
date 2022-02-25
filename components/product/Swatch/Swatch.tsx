import { FC } from "react";
import style from "./Swatch.module.css";
import cn from "classnames";
import { Check } from "@components/icons";
import { isDark } from "@lib/color";

interface Props {
  color?: string;
  label?: string;
  active?: boolean;
  variant?: "size" | "color" | string;
  onClick: () => void;
}

const Swatch: FC<Props> = ({ color, label, variant, active, ...rest }) => {
  label = label?.toLowerCase();
  variant = variant?.toLocaleLowerCase();

  const rootClassName = cn(style.root, {
    [style.active]: active,
    [style.color]: color,
    [style.size]: variant === "size",
    [style.dark]: color && isDark(color),
  });

  return (
    <button
      className={rootClassName}
      style={color ? { backgroundColor: color } : {}}
      {...rest}
    >
      {variant === "color" && active && (
        <span>
          <Check />
        </span>
      )}
      {variant === "size" ? label : null}
    </button>
  );
};

export default Swatch;
