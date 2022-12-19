import style from './PersonalData.module.css'
import {Formik, Form} from 'formik';
import {InputComponent} from "../Input/Input";
import {Button} from "../Button/Button";
import download from "../../assets/icons/download.svg"
import trash from "../../assets/icons/trash.svg"
import image from "../../assets/icons/image.svg"
import edit from "../../assets/icons/edit.svg"

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
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({isSubmitting, errors, touched}) => (
                <div className={style.formContainer}>
                    <Form className={style.formContainer}>
                        <div className={style.formAvatar}>
                            <div className={style.avatarContainer}>
                                <img className={style.avatar} src={image} alt="avatar"/>
                            </div>

                            <div className={style.avatarMenu}>
                                <button type={"button"} className={style.button}>Добавить фото<img className={style.img} src={download} alt=""/></button>
                                <button type={"button"} className={style.button}>Удалить<img className={style.img} src={trash} alt=""/></button>
                            </div>
                        </div>

                        <div className={style.formWrap}>
                            <div className="formFieldWrap">
                                <label htmlFor="last_name">Фамилия</label>
                                <div className="inputContainer">
                                    <InputComponent type="text" nameField="last_name" errors={errors} touched={touched}
                                                    isSubmitting={isSubmitting}/>
                                    <img className={style.editImg} src={edit} alt="edit"/>
                                </div>
                            </div>
                            <div className="formFieldWrap">
                                <label htmlFor="name">Имя</label>
                                <div className="inputContainer">
                                    <InputComponent type="text" nameField="name" errors={errors} touched={touched}/>
                                    <img className={style.editImg} src={edit} alt="edit"/>
                                </div>
                            </div>
                            <div className="formFieldWrap">
                                <label htmlFor="nickname">Никнейм</label>
                                <div className="inputContainer">
                                    <InputComponent type="text" nameField="nickname" errors={errors} touched={touched}/>
                                    <img className={style.editImg} src={edit} alt="edit"/>
                                </div>
                            </div>
                            <div className={style.buttonContainer}>
                                <Button bigButton={true} type="submit" text="Сохранить" disabled={isSubmitting}/>
                            </div>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    );
};
