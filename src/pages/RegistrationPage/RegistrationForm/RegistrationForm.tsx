import style from './RegistrationForm.module.css'
import logo from "../../../assets/img/logo-purple.svg";
import {Formik,Form} from 'formik';
import {InputComponent} from "../../../components/Input/Input";

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
                        <div className="formFieldWrap">
                            <label htmlFor="last_name">Фамилия</label>
                            <div className="inputContainer">
                                <InputComponent type="text" nameField="last_name" errors={errors} touched ={touched} isSubmitting={isSubmitting} />
                            </div>
                        </div>
                        <div className="formFieldWrap">
                            <label htmlFor="name">Имя</label>
                            <div className="inputContainer">
                                <InputComponent type="text" nameField="name"  errors={errors} touched ={touched}/>
                            </div>
                        </div>
                        <div className="formFieldWrap">
                            <label htmlFor="nickname">Никнейм</label>
                            <div className="inputContainer">
                                <InputComponent type="text" nameField="nickname" errors={errors} touched ={touched}/>
                            </div>
                        </div>
                        <div className="formFieldWrap">
                            <label htmlFor="password">Пароль</label>
                            <div className="inputContainer">
                                <InputComponent type="password" nameField="password" notification="Лимит на символы" errors={errors} touched ={touched}/>
                            </div>
                        </div>
                        <div className="formFieldWrap">
                            <label htmlFor="password2">Подтверждение пароля</label>
                            <div className="inputContainer">
                                <InputComponent type="password" nameField="password2"  errors={errors} touched ={touched}/>
                            </div>
                        </div>
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
