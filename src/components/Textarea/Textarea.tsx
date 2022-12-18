import style from './Textarea.module.css'
import {useRef, useState} from "react";
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
    isReplay?:boolean
}


export const Textarea = ({type, nameField,placeholder,notification, errors,touched,isSubmitting,isReplay=false }: InputPropsType) => {
    let [error, setError] = useState(false);
    let [value, setValue] = useState('');
    const ref = useRef<any>();

    let onChangeTextarea =(event:any)=>{
        setValue(event.target.value);
        let el=ref.current;
        if(el){
            el.style.height = 'auto';
            el.style.height = el.scrollHeight - 0 + 'px';
        }

    }
    function validateTextField(value?: string) {
        !value
            ? setError(true)
            : setError(false)
    }

    let styleReplay =  `${style.textarea} ${style.textareaReplay}`
    let textareaStyle= `${style.textarea}`
    return (
        <>
            <Field as={CustomTextarea} className={
              `${isReplay ? styleReplay : textareaStyle} ${error && touched?.[nameField]
                  ? `${style.textarea} ${style.inputStyleError}`
                  : `${style.textarea}`}`
            }
                   onChange={onChangeTextarea}
                   name={nameField}
                   validate={validateTextField}
                   placeholder={placeholder}
                   value={value}
                   innerref={ref}
            />
            {notification ? <span className={style.subSpan}>{notification}</span> : <></>}
        </>

    );
};
let CustomTextarea=(props:any)=>{
   return <textarea ref={props.innerref} placeholder={props.placeholder} {...props}/>
}



