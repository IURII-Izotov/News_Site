import style from './PersonalData.module.css'
import {Formik, Form, Field} from 'formik';
import {InputComponent} from "../Input/Input";
import {Button} from "../Button/Button";
import download from "../../assets/icons/download.svg"
import trash from "../../assets/icons/trash.svg"
import image from "../../assets/icons/image.svg"
import edit from "../../assets/icons/edit.svg"
import {ButtonIcon} from "../Button/ButtonIcon/ButtonIcon";
import {FC, MutableRefObject, useEffect, useRef, useState} from "react";
import {baseUrl, PersonalDataType,useSetDataUserMutation} from "../../api/user.api"



type PersonalDataPropsType = {
    data?: PersonalDataType
}
type formData = {
    last_name: string,
    name: string,
    nickname: string,
    profile_image: string|undefined|null
}
export const PersonalData: FC<PersonalDataPropsType> = ({data}) => {
    const inputRef = useRef<HTMLImageElement>();
    let [disabled, setDisabled] = useState(true);
    let [setUserData,res]=useSetDataUserMutation();
    const onDownloadClick = () => {
        inputRef?.current?.click();
    }
    let [picture,setPicture] =useState();
    useEffect(()=>{},[picture])
    return (
        <Formik
            initialValues={
                {
                    last_name:data?.last_name,
                    name: data?.name,
                    nickname: data?.nickname,
                    profile_image: data?.profile_image
                }
            }
            onSubmit={(values, {setSubmitting}) => {
                console.log(values)
                let formData = new FormData();
                    formData.append('name',values.name!)
                    formData.append('last_name',values.last_name!)
                    formData.append('nickname',values.nickname!)
                    formData.append('profile_image',values.profile_image!, picture)
                setUserData(formData);

                setSubmitting(false);
            }}
        >
            {({isSubmitting,
                  errors, touched, values, handleChange}) => (
                <div className={style.formContainer}>
                    <Form className={style.formContainer}>
                        <div className={style.formAvatar}>
                            <div className={style.avatarContainer}>
                                <img className={style.avatar} src={data?.profile_image ? `${baseUrl}/${data?.profile_image}` : image}
                                     alt="avatar"/>
                            </div>

                            <div className={style.avatarMenu}>
                                <input
                                    onChange={handleChange}
                                    // handleChange={(e:any)=>{
                                    //     console.log(e.target.files[0])
                                    //     return e.target.files[0]}
                                    // }
                                    // ref={inputRef}
                                    name="profile_image"
                                    type="file"
                                    // hidden={true}
                                    accept={'image/*,.png,.jpg,.gif,.web'}
                                />
                                <ButtonIcon onClick={onDownloadClick} type={"button"} text={'Добавить фото'}
                                            icon={download}/>
                                <ButtonIcon type={"button"} text={'Удалить'} icon={trash}/>
                            </div>
                        </div>

                        <div className={style.formWrap}>
                            <div className="formFieldWrap">
                                <label htmlFor="last_name">Фамилия</label>
                                <div className="inputContainer">
                                    <InputComponent
                                        handleChange={handleChange}
                                        value={values.last_name}
                                        type="text" nameField="last_name"
                                        errors={errors}
                                        touched={touched}
                                        isSubmitting={isSubmitting}
                                        disabled={disabled}/>
                                    <img onClick={() => setDisabled(!disabled)} className={style.editImg} src={edit}
                                         alt="edit"/>
                                </div>
                            </div>
                            <div className="formFieldWrap">
                                <label htmlFor="name">Имя</label>
                                <div className="inputContainer">
                                    <InputComponent
                                        handleChange={handleChange}
                                        value={values.name}
                                        type="text" nameField="name"
                                        errors={errors}
                                        touched={touched}
                                        disabled={disabled}/>
                                    <img onClick={() => setDisabled(!disabled)} className={style.editImg} src={edit}
                                         alt="edit"/>
                                </div>
                            </div>
                            <div className="formFieldWrap">
                                <label htmlFor="nickname">Никнейм</label>
                                <div className="inputContainer">
                                    <InputComponent
                                        handleChange={handleChange}
                                        value={values.nickname}
                                        type="text" nameField="nickname"
                                        errors={errors} touched={touched} disabled={disabled}/>
                                    <img onClick={() => setDisabled(!disabled)} className={style.editImg} src={edit}
                                         alt="edit"/>
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
