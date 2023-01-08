import style from './RegistrationForm.module.css'
import logo from "../../../assets/img/logo-purple.svg";
import {Formik,Form} from 'formik';
import {InputComponent} from "../../../components/Input/Input";
import {Button} from "../../../components/Button/Button";
import {useEffect} from "react";
import {QueryStatus} from "@reduxjs/toolkit/query";
import {useCreateRegistrationMutation} from '../../../api/login.api'
import {Link} from "react-router-dom";

export const RegistrationForm = () => {
    const [createRegistration, res] = useCreateRegistrationMutation();
    console.log(res);
    useEffect(()=>{
        if(res?.status == QueryStatus.fulfilled){
            localStorage.setItem('nickname', res.data.nickname);
            if (typeof window !== 'undefined') {
                const win: Window = window;
                win.location = '/login';
            }
        }
    },[res])
    let handleClickLogin = ()=>{
        localStorage.setItem('nickname', 'undefined');
        if (typeof window !== 'undefined') {
            const win: Window = window;
            win.location = '/login';
        }
    }
    return (
        <Formik
            initialValues={
                {
                    last_name: '',
                    name: '',
                    nickname: '',
                    profile_image:null,
                    password: '',
                    password2: ''
                }
            }
            onSubmit={(values, { setSubmitting }) => {
                createRegistration(values);
             console.log(values)
                setSubmitting(false);
            }}
        >
            {({ isSubmitting,errors,touched,values,handleChange }) => (
                <div className={style.formContainer}>
                    <img className={style.logo} src={logo} alt=""/>
                    <Form className={style.formWrap}>
                        <div className="formFieldWrap">
                            <label htmlFor="last_name">Фамилия</label>
                            <div className="inputContainer">
                                <InputComponent  onChange={handleChange}
                                                 value={values.last_name}
                                                 type="text" nameField="last_name"
                                                 errors={errors}
                                                 touched ={touched}
                                                 isSubmitting={isSubmitting} />
                            </div>
                        </div>
                        <div className="formFieldWrap">
                            <label htmlFor="name">Имя</label>
                            <div className="inputContainer">
                                <InputComponent onChange={handleChange}
                                                value={values.name}
                                                type="text"
                                                nameField="name"
                                                errors={errors}
                                                touched ={touched}/>
                            </div>
                        </div>
                        <div className="formFieldWrap">
                            <label htmlFor="nickname">Никнейм</label>
                            <div className="inputContainer">
                                <InputComponent onChange={handleChange}
                                                value={values.nickname}
                                                type="text"
                                                nameField="nickname"
                                                errors={errors}
                                                touched ={touched}/>
                            </div>
                        </div>
                        <div className="formFieldWrap">
                            <label htmlFor="password">Пароль</label>
                            <div className="formFieldWrapNotification">
                                <div className="inputContainer">
                                    <InputComponent onChange={handleChange}
                                                    value={values.password}
                                                    type="password"
                                                    nameField="password"
                                                    errors={errors}
                                                    touched ={touched}/>
                                </div>
                                <span className={style.subSpan}>Лимит на символы</span>
                            </div>

                        </div>
                        <div className="formFieldWrap">
                            <label htmlFor="password2">Подтверждение пароля</label>
                            <div className="inputContainer">
                                <InputComponent onChange={handleChange}
                                                value={values.password2}
                                                type="password"
                                                nameField="password2"
                                                errors={errors}
                                                touched ={touched} />
                            </div>
                        </div>
                        <div className={style.buttonContainer}>
                            <Button type="submit" text="Регистрация" disabled={isSubmitting}/>
                        </div>
                    </Form>
                    <span  className={style.textLogin}>Уже есть логин? <Link onClick={()=>handleClickLogin()} to={'/login'}>Войти</Link></span>
                </div>
            )}
        </Formik>
    );
};
