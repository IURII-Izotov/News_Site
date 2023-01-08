import style from './Footer.module.css'
import {FC} from "react";
import logo from "../../assets/img/logo.svg";
import {Link} from "react-router-dom";

export const Footer:FC = () => {
    return (
        <footer className={style.footer} >
            <div className={style.wrap}>
                <img className={`logo ${style.logo}`} src={logo} alt="logo"/>
                <div className={style.wrapMenu}>
                    <Link to={'/user'} className={style.link}>Мой профиль</Link>
                    <Link to={'/like'} className={style.link}>Избранные новости</Link>
                </div>
            </div>

        </footer>
    );
};
