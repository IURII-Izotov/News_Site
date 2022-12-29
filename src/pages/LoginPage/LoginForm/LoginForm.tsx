import style from './LoginForm.module.css'
import logo from "../../../assets/img/logo-purple.svg";
import {Formik, Form, Field} from 'formik';
import {InputComponent} from "../../../components/Input/Input";
import {Button} from "../../../components/Button/Button";
import {useEffect, useState} from "react";
import {usePostLoginMutation} from '../../../api/login.api'
export const LoginForm = () => {
    let [error, setError] = useState(false);

    const [updatePost, { isLoading: isUpdating }] = usePostLoginMutation();

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
                                <InputComponent handleChange={handleChange}
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
