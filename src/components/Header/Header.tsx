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
import {Form, Formik} from "formik";
import image from "../../assets/icons/image.svg";
import {baseUrl} from "../../api/user.api";
import {ButtonIcon} from "../Button/ButtonIcon/ButtonIcon";
import download from "../../assets/icons/download.svg";
import trash from "../../assets/icons/trash.svg";
import {InputComponent} from "../Input/Input";
import edit from "../../assets/icons/edit.svg";
import {Button} from "../Button/Button";

    export const Header:FC = () => {
    let [subMenu,setSubMenu] = useState(false)
        let [showInputSearch,setShowInputSearch] =useState(true)
    let {pathname}=useLocation();
    useEffect(()=>{
        if(pathname === '/like' || pathname === '/user'){
            setSubMenu(true)
        }
    },[])


    return (
        <header className={subMenu? style.subMenu : style.header}>
            <div className={style.wrap}>
                <img className="logo" src={subMenu? logoPurple : logo} alt="logo"/>
                <div className={style.menuWrap}>
                    <Formik
                        initialValues={
                            {
                            }
                        }
                        onSubmit={(values, {setSubmitting}) => {
                            console.log(values)

                            setSubmitting(false);
                        }}
                    >
                        {({isSubmitting,
                              errors, touched, values, handleChange}) => (
                            <div className={style.formContainer}>
                                <Form className={style.formContainer}>
                                    <div className={style.formWrap}>
                                        <div className="formFieldWrap">
                                            <div className="inputContainer">
                                                <InputComponent
                                                    type="text" nameField="search_text"
                                                    errors={errors}
                                                    isSubmitting={isSubmitting}
                                                hidden={showInputSearch}/>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        )}
                    </Formik>

                    <img onClick={()=>setShowInputSearch(showInputSearch)} className={style.icon} src={ subMenu?searchIconPurple :searchIcon} alt="search"/>
                    <img className={style.icon} src={ subMenu?userIconPurple :userIcon} alt="user"/>
                    <img className={style.icon} src={ subMenu?burgerMenuPurple :burgerMenu} alt="menu"/>
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
