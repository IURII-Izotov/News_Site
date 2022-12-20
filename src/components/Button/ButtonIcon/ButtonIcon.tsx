import style from "./ButtonIcon.module.css";

import {FC} from "react";
type buttonType= "button" | "submit" | "reset" | undefined
type ButtonIconPropsType={
    text:string
    type:buttonType
    icon:string
    isFullButton?:boolean
}
export const ButtonIcon:FC<ButtonIconPropsType> = ({type,text,icon,isFullButton=false}) => {
    return (
        <button type={type} className={isFullButton? style.fullButton:style.button}>{text}<img className={style.img} src={icon} alt={text}/></button>
    );
};
