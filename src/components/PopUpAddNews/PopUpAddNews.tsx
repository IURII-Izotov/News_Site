import style from './PopUpAddNews.module.css'
import {Form, Formik} from "formik";
import download from "../../assets/icons/download.svg";
import {InputComponent} from "../Input/Input";
import {Button} from "../Button/Button";
import {Textarea} from "../Textarea/Textarea";
import {Select} from "../Select/Select";
import {ButtonIcon} from "../Button/ButtonIcon/ButtonIcon";


export const PopUpAddNews = () => {
    let arrOptions=[
        'Спорт',
        'Кулинария',
        'Автомобили'
    ]

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
                    <Form className={style.formWrap}>
                        <div className='formFieldWrap'>
                            <span >Обложка новости</span>
                            <div className={style.btnDownloadWrap}>
                                <ButtonIcon text={'Загрузить'} type={'button'} icon={download} isFullButton={true}/>
                            </div>

                        </div>
                        <div className='formFieldWrap'>
                            <label htmlFor="header">Заголовок</label>
                            <div className={style.inputContainer}>
                                <InputComponent type="text" nameField="header"  errors={errors} touched ={touched}/>
                            </div>
                        </div>
                        <div className='formFieldWrap'>
                            <label htmlFor="description">Краткое описание</label>
                            <div className={style.inputContainer}>
                                <InputComponent type="text" nameField="description" errors={errors} touched ={touched}/>
                            </div>
                        </div>
                        <div className='formFieldWrap'>
                            <label htmlFor="text">Текст новости</label>
                            <div className={style.textareaContainer}>
                                <Textarea type="text" nameField="text" isChangeHeight={false} errors={errors} touched ={touched}/>
                            </div>
                        </div>
                        <div className='formFieldWrap'>
                            <label htmlFor="category">Выбрать категорию</label>
                            <div className={style.inputContainer}>
                                <Select options={arrOptions} />
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
