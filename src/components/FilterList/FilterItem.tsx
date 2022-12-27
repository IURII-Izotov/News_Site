import style from './FilterItem.module.css'
import {useState} from "react";

export const FilterItem = (props:any) => {
    let [checked,setChecked] = useState(false)

    return (
            <label className={style.container}>{props.name}
                <input type="checkbox" onChange={()=>setChecked(!checked)} checked={checked}/>
                <span className={style.checkmark}></span>
            </label>

    );
};
