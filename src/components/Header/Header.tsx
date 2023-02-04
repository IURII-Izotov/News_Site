import style from './Header.module.css'
import React, {FC, useCallback, useEffect, useRef, useState} from "react";
import logo from '../../assets/img/logo.svg'
import burgerMenu from '../../assets/icons/burger-menu.svg'
import userIcon from '../../assets/icons/user-icon.svg'
import searchIcon from '../../assets/icons/search.svg'
import logoPurple from '../../assets/img/logo-purple.svg'
import burgerMenuPurple from '../../assets/icons/burger-menu-purple.svg'
import userIconPurple from '../../assets/icons/user-icon-purple.svg'
import searchIconPurple from '../../assets/icons/search-purple.svg'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {Form, Formik} from "formik";
import {InputComponent} from "../Input/Input";
import {useDispatch} from "react-redux";
import {setSearchText} from '../../redux/slices/filterSlice'
import {useCreateLogOutQuery} from "../../api/login.api";
import {Menu} from "../Menu/Menu";
import {MenuItem} from "../Menu/MenuItem";
import lodash from "lodash"

function useOnClickOutside(ref: any, handler: any) {
    useEffect(
        () => {
            const listener = (event: any) => {
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

export const Header: FC = () => {
    let [subMenu, setSubMenu] = useState(false)
    let [burgerMenuVisible, setBurgerMenuVisible] = useState(true);
    let [accountMenuVisible, setAccountMenuVisible] = useState(true);
    let [showInputSearch, setShowInputSearch] = useState(true);
    let burgerMenuRef = useRef<any>();
    let accountMenuRef = useRef<any>();
    const navigate = useNavigate();
    let {pathname} = useLocation();
    let dispatch = useDispatch();
    let arrLinksSubMenu = ['/like/', '/like', '/user/', '/user']
    useEffect(() => {
        if (arrLinksSubMenu.includes(pathname)) {
            setSubMenu(true)
            return;
        }
        setSubMenu(false)
    }, [pathname])
    useOnClickOutside(burgerMenuRef, () => setBurgerMenuVisible(true));
    useOnClickOutside(accountMenuRef, () => setAccountMenuVisible(true));
    let handleLogOut = () => {
        const win: Window = window;
        win.location = '/login';
    }
    let updateSearchValue = useCallback(
        lodash.debounce((values: any) => {
            dispatch(setSearchText(values));
        }, 700), []
    )
    return (
        <header className={subMenu ? style.subMenu : style.header}>
            <div className={style.wrap}>
                <Link to={'/'}>
                    <img className="logo" src={subMenu ? logoPurple : logo} alt="logo"/>
                </Link>
                <div className={style.menuContainer}>
                    <Formik
                        initialValues={
                            {
                                search_text: ''
                            }
                        }
                        onSubmit={(values, {setSubmitting}) => {
                            dispatch(setSearchText(values));
                            setSubmitting(false);
                        }}
                    >
                        {({
                              isSubmitting, setSubmitting, setFieldValue,
                              errors, touched, values, handleChange
                          }) => (
                            <Form className={style.formContainer}>
                                <div className={style.searchInputContainer}>
                                    <InputComponent
                                        onChange={(e: any) => {
                                            navigate('/');
                                            setFieldValue('search_text', e.target.value)
                                            updateSearchValue({
                                                search_text: e.target.value
                                            });
                                            setSubmitting(false);
                                        }}
                                        type="text"
                                        nameField="search_text"
                                        errors={errors}
                                        isSubmitting={isSubmitting}
                                        hidden={showInputSearch}
                                    />
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div className={style.menuWrap}>
                        <img onClick={() => setShowInputSearch(!showInputSearch)} className={style.icon}
                             src={subMenu ? searchIconPurple : searchIcon} alt="search"/>
                        <div ref={accountMenuRef} className={style.burgerMenuWrap}>
                            <img onClick={() => setAccountMenuVisible(!accountMenuVisible)} className={style.icon}
                                 src={subMenu ? userIconPurple : userIcon} alt="user"/>
                            <Menu onClick={useOnClickOutside} hidden={accountMenuVisible}>
                                <MenuItem link={'/user/'} text={'Мой профиль'}/>
                                <div onClick={() => handleLogOut()} className={style.logOut}>
                                    Выйти
                                </div>
                            </Menu>
                        </div>
                        <div ref={burgerMenuRef} className={style.burgerMenuWrap}>
                            <img onClick={() => {
                                setBurgerMenuVisible(!burgerMenuVisible);
                            }} className={style.icon} src={subMenu ? burgerMenuPurple : burgerMenu} alt="menu"/>
                            <Menu onClick={useOnClickOutside} hidden={burgerMenuVisible} className={'burgerMenu'}>
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
