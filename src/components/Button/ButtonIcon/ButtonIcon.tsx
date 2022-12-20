import style from "./ButtonIcon.module.css";
import download from "../../../assets/icons/download.svg";
import {FC} from "react";
type buttonType= "button" | "submit" | "reset" | undefined
type ButtonIconPropsType={
    text:string
    type:buttonType
    icon:string
    isDownload:boolean
}
export const ButtonIcon:FC<ButtonIconPropsType> = ({type,text,icon,isDownload=false}) => {
    return (
        <button type={type} className={style.button}>{text}<img className={style.img} src={icon} alt={text}/></button>
    );
};
