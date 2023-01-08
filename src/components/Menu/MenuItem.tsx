import React, {FC} from "react";
import {Link} from "react-router-dom";
import style from './MenuItem.module.css'
type MenuItemPropsType={
    link:string
    onClick?:()=>any
    text:string

}

export const MenuItem:FC<MenuItemPropsType> = ({link,onClick,text}) => {
    return (
        <Link className={style.menuItem} to={link} onClick={onClick}>
            {text}
        </Link>
    );
};
