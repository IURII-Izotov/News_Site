import style from './LoginForm.module.css'
import logo from "../../../assets/img/logo-purple.svg";
import {Formik, Form, Field} from 'formik';
import {InputComponent} from "../../../components/Input/Input";
import {Button} from "../../../components/Button/Button";
import {useEffect} from "react";
import {usePostLoginMutation} from '../../../api/login.api'
import {useSignIn} from "react-auth-kit";
import {QueryStatus} from "@reduxjs/toolkit/query";

export const LoginForm = () => {
    const signIn = useSignIn();
    const [updatePost, res] = usePostLoginMutation();

    useEffect(()=>{
        if(!localStorage.getItem('nickname')){
        const win: Window = window;
        win.location = '/registration';
}
    },[])
    useEffect(()=>{
        if(res?.data){
            signIn(
                {
                    token: res.data.token,
                    expiresIn:525960,
                    tokenType: "Bearer",
                    authState: res.data.token,
                }

            )

        if(res?.status == QueryStatus.fulfilled){
            localStorage.setItem('token', res.data.token);
            if (typeof window !== 'undefined') {
                const win: Window = window;
                win.location = '/';
            }
        }
        }

    },[res])

    return (
        <Formik
            initialValues={
                {
                    nickname: '',
                    password: '',
                }
            }
            onSubmit={(values, { setSubmitting }) => {
                updatePost(values);
                localStorage.setItem('nickname', values.nickname);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting,errors,touched, values,handleChange }) => (
                <div className={style.formContainer}>
                    <img className={style.logo} src={logo} alt=""/>
                    <Form className={style.formWrap}>
                        <div className='formFieldWrap'>
                            <label htmlFor="nickname">Никнейм</label>
                            <div className='inputContainer'>
                                <InputComponent handleChange={handleChange}
                                                onChange={handleChange}
                                                value={values.nickname}
                                                type="text"
                                                nameField="nickname"
                                                errors={errors}
                                                touched ={touched}/>
                            </div>
                        </div>
                        <div className='formFieldWrap'>
                            <label htmlFor="password">Пароль</label>
                            <div className='inputContainer'>
                                <InputComponent
                                    onChange={handleChange}
                                    handleChange={handleChange}
                                                value={values.password}
                                                type="password"
                                                nameField="password"
                                                errors={errors}
                                                touched ={touched}/>
                            </div>
                        </div>
                        <div className={style.buttonContainer}>
                            <Button type="submit" text="Войти" disabled={isSubmitting}/>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    );
};
