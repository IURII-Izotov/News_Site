import style from './Textarea.module.css'
import { useState} from "react";
import {Field} from "formik";
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


export const Textarea = ({type, nameField,placeholder,notification, errors,touched,isSubmitting }: InputPropsType) => {
    let [error, setError] = useState(false);

    function validateTextField(value?: string) {
        !value
            ? setError(true)
            : setError(false)
    }

    return (
        <div className={`${style.inputWrap}`}>
            <Field  as={CustomTextarea} className={error && touched?.[nameField]
                ? `${style.inputStyle} ${style.inputStyleError}`
                : style.inputStyle}
                   name={nameField}
                   validate={validateTextField}
                   placeholder={placeholder}
            />
            {notification ? <span className={style.subSpan}>{notification}</span> : <></>}
        </div>

    );
};
let CustomTextarea=(props:any)=>{
   return <textarea placeholder={props.placeholder} {...props}/>
}



