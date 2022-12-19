import style from './PersonalData.module.css'
import {Formik,Form} from 'formik';
import {InputComponent} from "../Input/Input";
import {Button} from "../Button/Button";


export const PersonalData = () => {
    return (
        <Formik
            initialValues={
                {
                    last_name: '',
                    name: '',
                    nickname: '',
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
                    <Form className={style.formWrap}>
                        <div className="formFieldWrap">
                            <label htmlFor="last_name">Фамилия</label>
                            <div className={style.inputContainer}>
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
                        <div className={style.buttonContainer}>
                            <Button type="submit" text="Регистрация" disabled={isSubmitting}/>
                        </div>
                    </Form>
                    <span className={style.textLogin}>Уже есть логин? <a href='#'>Войти</a></span>
                </div>
            )}
        </Formik>
    );
};
