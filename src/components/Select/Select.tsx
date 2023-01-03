import style from './Select.module.css'
import {FC} from "react";
import arrowDown from '../../assets/icons/arrow-down.svg'
type SelectPropsType={
    options:string[]
}
export const Select: FC<SelectPropsType> = ({options}) => {


    let onChangeValue = (event: any) => {

    }
    return (

            <form onSubmit={onChangeValue}>
                <div className={style.selectWrap}>
                    <select
                        name="category"
                        // value={values.color}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        style={{display: 'block'}}
                        className={style.select}
                    >
                        <option value="Не выбрано" label="Не выбрано"/>
                        {
                            options?.map((option,i) => {
                                    return <option key={i} value={option} label={option}/>
                                }
                            )
                        }

                    </select>
                    <img src={arrowDown} alt=""/>
                </div>


                {/*{errors.color &&*/}
                {/*touched.color &&*/}
                {/*<div className="input-feedback">*/}
                {/*    {errors.color}*/}
                {/*</div>}*/}


                {/*<DisplayFormikState {...props} />*/}
            </form>


    );
};

