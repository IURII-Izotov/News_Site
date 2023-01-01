import style from './Input.module.css'
import {Field, useFormik} from 'formik';
import {useRef, useState} from "react";


type initialValuesFormType = {
    [key: string]: boolean
}
type InputPropsType = {
    type: string
    nameField: string
    notification?: string
    errors?: {}
    touched?: initialValuesFormType
    isSubmitting?: boolean
    placeholder?: string
    typeTextarea?: boolean
    options?: string[]
    value?:string
    handleChange?:any
    hidden?:boolean
    ref?:any
    disabled?:boolean
}

export const InputComponent = ({value,type, nameField, placeholder,
                                   handleChange, notification, errors,
                                   touched, isSubmitting,
                                   typeTextarea = false, options,
                                    hidden, ref, disabled
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
                       onChange={handleChange}
                       type={type}
                       name={nameField}
                       validate={validateTextField}
                       placeholder={placeholder}
                       value={value}
                       hidden={hidden}
                       disabled = {disabled}
                    // @ts-ignore
                    //    innerRef={input => { input }}
                />
            </div>
    );
};

