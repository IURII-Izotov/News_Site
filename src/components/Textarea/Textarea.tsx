import style from './Textarea.module.css'
import {useRef, useState} from "react";
import {Field} from "formik";
type initialValuesFormType = {
    [key: string]: boolean
}
type InputPropsType = {
    type?: string
    nameField: string
    notification?: string
    errors?: {}
    touched?: initialValuesFormType
    isSubmitting?:boolean
    placeholder?:string
    isReplay?:boolean
    isChangeHeight?:boolean
    value?:string
    setFieldValue?:any
}


export const Textarea = ({setFieldValue ,value,type, nameField,placeholder,notification, errors,touched,isSubmitting,isReplay=false,isChangeHeight=true }: InputPropsType) => {
    let [error, setError] = useState(false);
    let [valueText, setValueText] = useState('');
    const ref = useRef<any>();

    let onChangeTextarea =(event:any)=>{
        setValueText(event.target.value);
        let el=ref.current;
        if(!event.value){
            el.style.height = '100%';
            el.style.minheight = '100%';
        }
        if(el){
            el.style.lineHeight = "150%";
            el.style.height = el.scrollHeight - 0 + 'px';
            el.height = '100%'
        }
        setFieldValue("text", event.target.value);
    }
    let onChangeValueTextArea = (event:any)=>{
        setValueText(event.target.value);
        let el=ref.current;
        el.style.lineHeight = "150%";
        setFieldValue("text", event.target.value);
    }
    function validateTextField(value?: string) {
        !value
            ? setError(true)
            : setError(false)
    }

    let styleReplay =  `${style.textarea} ${style.textareaReplay}`
    let textareaStyle= `${style.textarea}`
    return (
            <Field as='textarea' className={
              `${isReplay ? styleReplay : textareaStyle} ${error && touched?.[nameField]
                  ? `${style.textarea}${style.textareaPost} ${style.inputStyleError}`
                  : `${style.textarea} ${style.textareaPost}`}`
            }
                   onChange={(e:any)=>{
                       if(!isChangeHeight){
                           onChangeValueTextArea(e)
                       }
                       onChangeTextarea(e)
                   }

                    }
                   name={nameField}
                   validate={validateTextField}
                   placeholder={placeholder}
                   value={value}
                   innerRef={ref}
            />


    );
};



