import style from './RegistrationForm.module.css'
import logo from "../../../assets/img/logo-purple.svg";
import {Formik,Form} from 'formik';
import {InputComponent} from "./Input/Input";

export const RegistrationForm = () => {
    return (
        <Formik
            initialValues={
                {
                    last_name: '',
                    name: '',
                    nickname: '',
                    password: '',
                    password2: ''
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
                        <InputComponent type="text" nameField="last_name" label='Фамилия' errors={errors} touched ={touched} isSubmitting={isSubmitting} />
                        <InputComponent type="text" nameField="name" label='Имя' errors={errors} touched ={touched}/>
                        <InputComponent type="text" nameField="nickname" label='Никнейм' errors={errors} touched ={touched}/>
                        <InputComponent type="password" nameField="password" label='Пароль' notification="Лимит на символы" errors={errors} touched ={touched}/>
                        <InputComponent type="password" nameField="password2" label='Имя' errors={errors} touched ={touched}/>
                        <button className={style.formButton} type="submit" disabled={isSubmitting} >
                            Регистрация
                        </button>
                    </Form>
                    <span className={style.textLogin}>Уже есть логин? <a href='#'>Войти</a></span>
                </div>
            )}
        </Formik>
    );
};
