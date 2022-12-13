import style from './Footer.module.css'
import {FC} from "react";
import logo from "../../assets/img/logo.svg";

export const Footer:FC = () => {
    return (
        <footer className={style.footer} >
            <div className={style.wrap}>
                <img className={`logo ${style.logo}`} src={logo} alt="logo"/>
                <div className={style.wrapMenu}>
                    <a className={style.link}>Мой профиль</a>
                    <a className={style.link}>Избранные новости</a>
                </div>
            </div>

        </footer>
    );
};
