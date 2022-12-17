import style from './LoginForm.module.css'
import logo from "../../../assets/img/logo-purple.svg";
import {Formik,Form} from 'formik';
import {InputComponent} from "../../../components/Input/Input";

export const LoginForm = () => {
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

                        <button className={style.formButton} type="submit" disabled={isSubmitting} >
                            Войти
                        </button>
                    </Form>
                </div>
            )}
        </Formik>
    );
};
