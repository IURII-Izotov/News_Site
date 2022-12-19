import style from './Input.module.css'
import {Field} from 'formik';
import {useState} from "react";
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
    typeTextarea?:boolean
}

export const InputComponent = ({type, nameField,placeholder,notification, errors,touched,isSubmitting,typeTextarea=false}: InputPropsType) => {
    let [error, setError] = useState(false);
    let [valueInput,setValue] = useState('')
    function validateTextField(value?: string) {
        !valueInput
            ? setError(true)
            : setError(false)
    }
    let onChangeValue=(event:any)=>{
        setValue(event.target.value)
    }
    return (

        <div className={`${style.inputWrap}`}>
            <Field className={
                `${error && touched?.[nameField]
                ? `${style.inputStyle} ${style.inputStyleError}`
                : style.inputStyle }`
                }
                   onChange={onChangeValue}
                   type={type}
                   name={nameField}
                   validate={validateTextField}
                   placeholder={placeholder}
                   value={valueInput}
            />
        </div>


    );
};

