import style from './Input.module.css'
import {Field} from 'formik';
import { useState} from "react";
type initialValuesFormType = {
    [key: string]: boolean
}
type InputPropsType = {
    type: string
    nameField: string
    notification?: string
    errors?: {}
    touched?: initialValuesFormType
    isSubmitting?:boolean
    placeholder?:string
}


export const InputComponent = ({type, nameField,placeholder,notification, errors,touched,isSubmitting }: InputPropsType) => {
    let [error, setError] = useState(false);

    function validateTextField(value?: string) {
        !value
            ? setError(true)
            : setError(false)
    }

    return (
        <div className={`${style.inputWrap}`}>
            <Field className={error && touched?.[nameField]
                ? `${style.inputStyle} ${style.inputStyleError}`
                : style.inputStyle}
                   type={type}
                   name={nameField}
                   validate={validateTextField}
                   placeholder={placeholder}
            />
            {notification ? <span className={style.subSpan}>{notification}</span> : <></>}
        </div>

    );
};



