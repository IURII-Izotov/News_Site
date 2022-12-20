import style from './PopUpAddNews.module.css'
import {Form, Formik} from "formik";
import logo from "../../assets/img/logo-purple.svg";
import {InputComponent} from "../Input/Input";
import {Button} from "../Button/Button";


export const PopUpAddNews = () => {
    return (
        <Formik
            initialValues={
                {
                    nickname: '',
                    password: '',
                }
            }
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting,errors,touched }) => (
                <div className={style.formContainer}>
                    <img className={style.logo} src={logo} alt=""/>
                    <Form className={style.formWrap}>
                        <div className='formFieldWrap'>
                            <label htmlFor="nickname">Никнейм</label>
                            <div className='inputContainer'>
                                <InputComponent type="text" nameField="nickname"  errors={errors} touched ={touched}/>
                            </div>
                        </div>
                        <div className='formFieldWrap'>
                            <label htmlFor="password">Пароль</label>
                            <div className='inputContainer'>
                                <InputComponent type="password" nameField="password" errors={errors} touched ={touched}/>
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
