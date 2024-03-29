import style from './Input.module.css'
import {Field} from 'formik';
import {useState} from "react";
import edit from "../../assets/icons/edit.svg";


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
    value?: string
    handleChange?: any
    hidden?: boolean
    innerRef?: any
    isEditable?: boolean
    accept?: string
    onChange?: any
    list?: string
}

export const InputComponent = ({
                                   value, type, nameField, placeholder,
                                   handleChange, errors,
                                   touched, isSubmitting,
                                   typeTextarea = false, options,
                                   hidden, innerRef,
                                   accept, onChange, isEditable, list
                               }: InputPropsType) => {
    let [error, setError] = useState(false);
    let [disabled, setDisabled] = useState(true);

    function validateTextField(value?: string) {
        !value
            ? setError(true)
            : setError(false)
    }

    return (
        <>
            <div className={`${style.inputWrap}`}>
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
                       disabled={isEditable ? disabled : ''}
                       innerRef={innerRef}
                       accept={accept}
                       onChange={onChange}
                       list={list}
                />
            </div>
            {
                isEditable
                    ? <img onClick={() => setDisabled(!disabled)} className={style.editImg} src={edit}
                           alt="edit"/>
                    : <></>
            }

        </>
    );
};

