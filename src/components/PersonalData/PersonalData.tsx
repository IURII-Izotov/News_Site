import style from './PersonalData.module.css'
import {Formik, Form, Field} from 'formik';
import {InputComponent} from "../Input/Input";
import {Button} from "../Button/Button";
import download from "../../assets/icons/download.svg"
import trash from "../../assets/icons/trash.svg"
import image from "../../assets/icons/image.svg"
import edit from "../../assets/icons/edit.svg"
import {ButtonIcon} from "../Button/ButtonIcon/ButtonIcon";
import {FC, useRef, useState} from "react";
import {PersonalDataType} from "../../api/user.api"


type PersonalDataPropsType={
    data?:PersonalDataType
}
export const PersonalData:FC<PersonalDataPropsType> = ({data}) => {
    let [disabled,setDisabled]=useState(true);
    const inputRef=useRef(null);
    console.log(inputRef)
    const onDownloadClick =()=>{
        // @ts-ignore
        inputRef.current.click();
    }
    return (
        <Formik
            initialValues={
                {
                    last_name: '',
                    name: '',
                    nickname: '',
                    file:''
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
                                <img className={style.avatar} src={data?.profile_image ? data?.profile_image : image} alt="avatar"/>
                            </div>

                            <div className={style.avatarMenu}>
                                <InputComponent nameField="file" ref={inputRef} type="file" hidden={true}/>
                                <ButtonIcon onClick={onDownloadClick} type={"button"} text={'Добавить фото'} icon={download}/>
                                <ButtonIcon type={"button"} text={'Удалить'} icon={trash} />
                            </div>
                        </div>

                        <div className={style.formWrap}>
                            <div className="formFieldWrap">
                                <label htmlFor="last_name">Фамилия</label>
                                <div className="inputContainer">
                                    <InputComponent value={data?.last_name}
                                                    type="text" nameField="last_name"
                                                    errors={errors}
                                                    touched={touched}
                                                    isSubmitting={isSubmitting}
                                                    disabled={disabled}/>
                                    <img onClick={()=> setDisabled(!disabled)} className={style.editImg} src={edit} alt="edit"/>
                                </div>
                            </div>
                            <div className="formFieldWrap">
                                <label htmlFor="name">Имя</label>
                                <div className="inputContainer">
                                    <InputComponent value={data?.name}
                                                    type="text" nameField="name"
                                                    errors={errors}
                                                    touched={touched}
                                                    disabled={disabled}/>
                                    <img onClick={()=> setDisabled(!disabled)} className={style.editImg} src={edit} alt="edit"/>
                                </div>
                            </div>
                            <div className="formFieldWrap">
                                <label htmlFor="nickname">Никнейм</label>
                                <div className="inputContainer">
                                    <InputComponent value={data?.nickname}
                                                    type="text" nameField="nickname"
                                                    errors={errors} touched={touched} disabled={disabled}/>
                                    <img onClick={()=> setDisabled(!disabled)} className={style.editImg} src={edit} alt="edit"/>
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
