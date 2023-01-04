import style from './AddNews.module.css'
import {Field, Form, Formik} from "formik";
import download from "../../../assets/icons/download.svg";
import closeButton from "../../../assets/icons/close-button.svg";
import {InputComponent} from "../../Input/Input";
import {Button} from "../../Button/Button";
import {Textarea} from "../../Textarea/Textarea";
import {Select} from "../../Select/Select";
import {ButtonIcon} from "../../Button/ButtonIcon/ButtonIcon";
import {FC} from "react";

type AddNewsType={
    setActive:any
}

export const AddNews:FC<AddNewsType> = ({setActive}) => {
    let arrOptions=[
        'Спорт',
        'Кулинария',
        'Автомобили'
    ]

    return (
        <Formik
            initialValues={
                {
                    title:'',
                    text:'',
                    short_desc:'',
                    tag:''
                }
            }
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
            }}
        >
            {({ isSubmitting,errors,touched,setFieldValue,values  }) => (
                <div className={style.formContainer} onClick={(e)=>e.stopPropagation()}>
                    <img onClick={()=>setActive(false)} className={style.closeButton} src={closeButton} alt=""/>
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
                                <InputComponent type="text" nameField="title"  errors={errors} touched ={touched}/>
                            </div>
                        </div>
                        <div className='formFieldWrap'>
                            <label htmlFor="short_desc">Краткое описание</label>
                            <div className={style.inputContainer}>
                                <InputComponent type="text" nameField="short_desc" errors={errors} touched ={touched}/>
                            </div>
                        </div>
                        <div className='formFieldWrap'>
                            <label htmlFor="text">Текст новости</label>
                            <div className={style.textareaContainer}>
                                <Textarea value={values.text} setFieldValue ={setFieldValue } nameField="text" isChangeHeight={false} errors={errors} touched ={touched}/>
                            </div>
                        </div>
                        <div className='formFieldWrap'>
                            <label htmlFor="tag">Выбрать категорию</label>
                            <div className={style.inputContainer}>
                                <Select nameField="tag" options={arrOptions} />
                            </div>
                        </div>
                        <div className={style.buttonContainer}>
                            <Button type="submit" text="Создать" disabled={isSubmitting}/>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>

    );
};
