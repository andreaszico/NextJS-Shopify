import cn from "classnames";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import style from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode | ReactNode[],
}

const Button: FC<Props> = ({ children, className, ...rest }) => {
    return (
        <button type="button" className={cn(style.root, className)} {...rest}>
            { children }
        </button>
    )
}

export default Button;