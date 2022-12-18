import style from './Input.module.css'
import {Field} from 'formik';
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
    isSubmitting?:boolean
    placeholder?:string
    typeTextarea?:boolean
}


export const InputComponent = ({type, nameField,placeholder,notification, errors,touched,isSubmitting,typeTextarea=false}: InputPropsType) => {
    let [error, setError] = useState(false);
    let [value, setValue] = useState('');
    const ref = useRef(null);
    let onChangeTextarea =(event:any)=>{
        console.log('s')
        setValue(event.target.value);
    }
    function validateTextField(value?: string) {
        !value
            ? setError(true)
            : setError(false)
    }

    return (
        <div className={`${style.inputWrap}`}>
            <Field as={typeTextarea ? CustomTextarea : ''} className={
                `${error && touched?.[nameField]
                ? `${style.inputStyle} ${style.inputStyleError}`
                : style.inputStyle}`+" "+`${typeTextarea ? style.textarea : ''}`
                }
                   type={type}
                   name={nameField}
                   validate={validateTextField}
                   placeholder={placeholder}
            />
            {notification ? <span className={style.subSpan}>{notification}</span> : <></>}
        </div>

    );
};

let CustomTextarea=(props:any)=>{

    return <textarea {...props} />
}

