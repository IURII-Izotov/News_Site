import style from './FilterItem.module.css'
import {useState} from "react";

export const FilterItem = (name:any) => {
    let [checked,setChecked] = useState(false)

    return (
        <>
            <label className={style.container}>{name}
                <input type="checkbox" onClick={()=>setChecked(!checked)} checked={checked}/>
                <span className={style.checkmark}></span>
            </label>
        </>
    );
};
