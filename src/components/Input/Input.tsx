import style from './Input.module.css'
import {Field, useFormik} from 'formik';
import {useRef, useState} from "react";
import {LoginForm} from "../../pages/LoginPage/LoginForm/LoginForm";


type initialValuesFormType = {
    [key: string]: boolean
}
type InputPropsType = {
    type: string
    nameField: string

    errors?: {}
    touched?: initialValuesFormType
    isSubmitting?: boolean
    placeholder?: string
    typeTextarea?: boolean
    options?: string[]
    value?:string
    handleChange?:any
    hidden?:boolean
    innerRef?:any
    disabled?:boolean
    accept?:string
    onChange?:any
}

export const InputComponent = ({value,type, nameField, placeholder,
                                   handleChange, errors,
                                   touched, isSubmitting,
                                   typeTextarea = false, options,
                                    hidden, innerRef, disabled,
                                   accept,onChange
                               }: InputPropsType) => {
    let [error, setError] = useState(false);
    function validateTextField(value?: string) {
        !value
            ? setError(true)
            : setError(false)
    }

    return (
            <div  className={`${style.inputWrap}`}>
                <Field className={
                    `${error && touched?.[nameField]
                        ? `${style.inputStyle} ${style.inputStyleError}`
                        : style.inputStyle}`
                }
                       type={type}
                       name={nameField}
                       validate={validateTextField}
                       placeholder={placeholder}
                       value={value}
                       hidden={hidden}
                       disabled = {disabled}
                       innerRef={innerRef}
                       accept={accept}
                       onChange={onChange}
                />
            </div>
    );
};

