import style from './Header.module.css'
import {FC, useEffect, useState} from "react";
import logo  from '../../assets/img/logo.svg'
import burgerMenu  from '../../assets/icons/burger-menu.svg'
import userIcon  from '../../assets/icons/user-icon.svg'
import searchIcon  from '../../assets/icons/search.svg'
import logoPurple  from '../../assets/img/logo-purple.svg'
import burgerMenuPurple  from '../../assets/icons/burger-menu-purple.svg'
import userIconPurple  from '../../assets/icons/user-icon-purple.svg'
import searchIconPurple  from '../../assets/icons/search-purple.svg'
import {useLocation} from 'react-router-dom'

    export const Header:FC = () => {
    let [subMenu,setSubMenu] = useState(false)
    let {pathname}=useLocation();
    useEffect(()=>{
        if(pathname === '/like' || pathname === '/user'){
            setSubMenu(true)
        }
    },[])


    return (
        <header className={subMenu? style.subMenu:style.header}>
            <div className={style.wrap}>
                <img className="logo" src={subMenu? logoPurple : logo} alt="logo"/>
                {
                    subMenu
                        ? <></>
                        : <h1 className={style.heading}>Новости</h1>
                }

                <div className={style.menuWrap}>
                    <img className={style.icon} src={ subMenu?searchIconPurple :searchIcon} alt="search"/>
                    <img className={style.icon} src={ subMenu?userIconPurple :userIcon} alt="user"/>
                    <img className={style.icon} src={ subMenu?burgerMenuPurple :burgerMenu} alt="menu"/>
                </div>
            </div>

        </header>
    );
};
