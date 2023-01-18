import style from './PersonalData.module.css'
import {Formik, Form, Field} from 'formik';
import {InputComponent} from "../Input/Input";
import {Button} from "../Button/Button";
import download from "../../assets/icons/download.svg"
import trash from "../../assets/icons/trash.svg"
import image from "../../assets/icons/image.svg"
import loading from "../../assets/img/loading.gif"
import {ButtonIcon} from "../Button/ButtonIcon/ButtonIcon";
import {ChangeEvent, FC, useRef, useState} from "react";
import {baseUrl, PersonalDataType, useSetDataUserMutation} from "../../api/user.api"


type PersonalDataPropsType = {
    data?: PersonalDataType
    isFetching?: boolean
}
type formData = {
    last_name?: string,
    name?: string,
    nickname?: string,
    profile_image: string | undefined | null

}
export const PersonalData: FC<PersonalDataPropsType> = ({data, isFetching}) => {
    const inputRef = useRef<any>();
    let [file, setFile] = useState<any>();
    let [setUserData, res] = useSetDataUserMutation();

    function userFormData(values: formData) {
        let formData = new FormData();
        formData.append('name', values.name!)
        formData.append('last_name', values.last_name!)
        formData.append('nickname', values.nickname!)
        if (file) {
            formData.append('profile_image', file, file.name)
        }
        formData.append('profile_image', '');
        setUserData(formData);
        localStorage.setItem('nickname', values.nickname!);
    }

    const onDownloadClick = () => {
        inputRef?.current?.click();
    }
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>, handleSubmit: () => void) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
        handleSubmit();
    };
    return (
        <Formik

            initialValues={
                {
                    last_name: data?.last_name,
                    name: data?.name,
                    nickname: data?.nickname,
                    profile_image: data?.profile_image
                }
            }
            onSubmit={(values: formData, {setSubmitting}) => {
                userFormData(values);
                setSubmitting(false);
            }}
        >
            {({
                  isSubmitting,
                  errors,
                  touched,
                  values,
                  handleChange,
                  handleSubmit
              }) => (
                <div className={style.formContainer}>
                    <Form className={style.formContainer}>
                        <div className={style.formAvatar}>
                            <div className={style.avatarContainer}>
                                {
                                    isFetching ?
                                        <img className={style.loadingImg} src={loading} alt=""/>
                                        : <img className={data?.profile_image ? style.avatar : style.noAvatar} src={
                                            data?.profile_image || res?.data?.profile_image
                                                ? `${baseUrl}/${data?.profile_image}`
                                                : (isFetching ? trash : image)
                                        }
                                               alt="avatar"/>
                                }
                            </div>

                            <div className={style.avatarMenu}>
                                <input
                                    onChange={(e) => {
                                        handleFileChange(e, handleSubmit);
                                    }}
                                    ref={inputRef}
                                    name="profile_image"
                                    type="file"
                                    accept={'image/*,.png,.jpg,.gif,.web'}
                                    className={style.inputHidden}
                                />
                                <ButtonIcon onClick={() => {
                                    onDownloadClick();
                                }} type={"button"} text={'Добавить фото'}
                                            icon={download}/>
                                <ButtonIcon onClick={() => setFile(null)} type={"submit"} text={'Удалить'}
                                            icon={trash}/>
                            </div>
                        </div>

                        <div className={style.formWrap}>
                            <div className="formFieldWrap">
                                <label htmlFor="last_name">Фамилия</label>
                                <div className="inputContainer">
                                    <InputComponent
                                        onChange={handleChange}
                                        value={values.last_name}
                                        type="text"
                                        nameField="last_name"
                                        errors={errors}
                                        touched={touched}
                                        isSubmitting={isSubmitting}
                                        isEditable={true}
                                    />
                                </div>
                            </div>
                            <div className="formFieldWrap">
                                <label htmlFor="name">Имя</label>
                                <div className="inputContainer">
                                    <InputComponent
                                        onChange={handleChange}
                                        value={values.name}
                                        type="text"
                                        nameField="name"
                                        errors={errors}
                                        touched={touched}
                                        isEditable={true}
                                    />
                                </div>
                            </div>
                            <div className="formFieldWrap">
                                <label htmlFor="nickname">Никнейм</label>
                                <div className="inputContainer">
                                    <InputComponent
                                        onChange={handleChange}
                                        value={values.nickname}
                                        type="text" nameField="nickname"
                                        errors={errors}
                                        touched={touched}
                                        isEditable={true}/>

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
