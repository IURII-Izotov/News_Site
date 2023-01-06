import style from './FilterItem.module.css'
import React, {FC, useState} from "react";
import {Field} from "formik";

type FilterItemPropsType={
    value:string
    name:string
    onChange?:any
}
export const FilterItem:FC<FilterItemPropsType> = (props:any) => {
    let [checked,setChecked] = useState(false)
    return (
            <label className={style.container}>

                <Field
                    onChange={props.onChange}
                    onClick={()=>{
                    setChecked(!checked)
                }} checked={checked} type="checkbox" name={props.name} value={props.value}/>
                {props.value}
                <span className={style.checkmark}></span>
            </label>

    );
};
