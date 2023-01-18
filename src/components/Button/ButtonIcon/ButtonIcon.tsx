import style from "./ButtonIcon.module.css";

import {FC} from "react";

type buttonType = "button" | "submit" | "reset" | undefined
type ButtonIconPropsType = {
    text: string
    type: buttonType
    icon: string
    isFullButton?: boolean
    onClick?: () => void
}
export const ButtonIcon: FC<ButtonIconPropsType> = ({type, onClick, text, icon, isFullButton = false}) => {
    return (
        <button onClick={onClick}
                type={type}
                className={isFullButton ? style.fullButton : style.button}>{text}
            <img className={style.img} src={icon} alt={text}/>
        </button>
    );
};
