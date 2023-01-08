import style from './Header.module.css'
import React, {FC, useEffect, useRef, useState} from "react";
import logo  from '../../assets/img/logo.svg'
import burgerMenu  from '../../assets/icons/burger-menu.svg'
import userIcon  from '../../assets/icons/user-icon.svg'
import searchIcon  from '../../assets/icons/search.svg'
import logoPurple  from '../../assets/img/logo-purple.svg'
import burgerMenuPurple  from '../../assets/icons/burger-menu-purple.svg'
import userIconPurple  from '../../assets/icons/user-icon-purple.svg'
import searchIconPurple  from '../../assets/icons/search-purple.svg'
import {Link, useLocation} from 'react-router-dom'
import {Form, Formik} from "formik";
import {InputComponent} from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {setSearchText} from '../../redux/slices/filterSlice'
import {useCreateLogOutQuery} from "../../api/login.api";
import {Menu} from "../Menu/Menu";
import {MenuItem} from "../Menu/MenuItem";


function useOnClickOutside(ref:any, handler:any) {
    useEffect(
        () => {
            const listener = (event:any) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },

        [ref, handler]
    );
}

    export const Header:FC = () => {
        let [subMenu, setSubMenu] = useState(false)
        let [burgerMenuVisible,setBurgerMenuVisible] =useState(true);
        let [accountMenuVisible,setAccountMenuVisible] =useState(true);
        let [showInputSearch, setShowInputSearch] = useState(true);
        let [skip, setSkip] = useState(true);
        let  { data, error, isLoading, isUninitialized } = useCreateLogOutQuery({},{skip:skip});
        let {pathname} = useLocation();

        let burgerMenuRef=useRef<any>();
        let accountMenuRef=useRef<any>();

        let dispatch = useDispatch();

        useEffect(() => {
            if (pathname == '/like/' || pathname == '/user/') {
                setSubMenu(true)
            }
            if (pathname == '/like' || pathname == '/user') {
                setSubMenu(true)
            }
        }, [pathname])
        useOnClickOutside(burgerMenuRef,()=> setBurgerMenuVisible(true));
        useOnClickOutside(accountMenuRef,()=> setAccountMenuVisible(true));
        let handleLogOut=()=>{
            setSkip(false);
            const win: Window = window;
            win.location = '/login';
        }
    return (
        <header className={subMenu? style.subMenu : style.header}>
            <div className={style.wrap}>
                <img className="logo" src={subMenu? logoPurple : logo} alt="logo"/>
                <div className={style.menuContainer}>
                    <Formik
                        initialValues={
                            {
                                search_text:'post'
                            }
                        }
                        onSubmit={(values, {setSubmitting}) => {
                            dispatch(setSearchText(values));
                            setSubmitting(false);
                        }}
                    >
                        {({isSubmitting,setSubmitting,setFieldValue,
                              errors, touched, values, handleChange}) => (
                            <div className={style.formContainer}>
                                <Form className={style.formContainer}>
                                    <div className={style.formWrap}>
                                        <div className="formFieldWrap">
                                            <div className="inputContainer">
                                                <InputComponent
                                                    onChange={(e:any)=>setFieldValue('search_text',e.target.value)}
                                                    type="text"
                                                    nameField="search_text"
                                                    errors={errors}
                                                    isSubmitting={isSubmitting}
                                                    hidden={showInputSearch}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        )}
                    </Formik>
                    <div className={style.menuWrap}>
                        <img onClick={() => setShowInputSearch(!showInputSearch)} className={style.icon}
                             src={subMenu ? searchIconPurple : searchIcon} alt="search"/>
                        <div  ref={accountMenuRef} className={style.burgerMenuWrap} >
                            <img onClick={()=> setAccountMenuVisible(!accountMenuVisible)} className={style.icon} src={subMenu ? userIconPurple : userIcon} alt="user"/>
                            <Menu  onClick={useOnClickOutside} hidden={accountMenuVisible}>
                                <MenuItem link={'/user/'} text={'Мой профиль'}/>
                                <div onClick={() => handleLogOut()} className={style.logOut}>
                                    Выйти
                                </div>
                            </Menu>
                        </div>
                        <div ref={burgerMenuRef}  className={style.burgerMenuWrap}>
                            <img onClick={()=>{
                                setBurgerMenuVisible(!burgerMenuVisible);
                            }} className={style.icon} src={subMenu ? burgerMenuPurple : burgerMenu} alt="menu"/>
                            <Menu  onClick={useOnClickOutside} hidden={burgerMenuVisible} className={'burgerMenu'}>
                                <MenuItem link={'/like/'} text={'Избранные новости'}/>
                            </Menu>
                        </div>

                    </div>
                </div>
            </div>
            {
                subMenu
                    ? <></>
                    : <h1 className={style.heading}>Новости</h1>
            }
        </header>
    );
};
