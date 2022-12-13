import style from './Header.module.css'
import {FC} from "react";
import logo  from '../../assets/img/logo.svg'
import burgerMenu  from '../../assets/icons/burger-menu.svg'
import userIcon  from '../../assets/icons/user-icon.svg'
import searchIcon  from '../../assets/icons/search.svg'
export const Header:FC = () => {
    return (
        <header className={style.header}>
            <div className={style.wrap}>
                <img className={style.logo} src={logo} alt=""/>
                <h1 className={style.heading}>Новости</h1>
                <div className={style.menuWrap}>
                    <img className={style.icon} src={searchIcon} alt=""/>
                    <img className={style.icon} src={userIcon} alt=""/>
                    <img className={style.icon} src={burgerMenu} alt=""/>
                </div>
            </div>

        </header>
    );
};
