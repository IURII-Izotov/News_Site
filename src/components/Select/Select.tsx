import style from './Select.module.css'
import {FC} from "react";
import arrowDown from '../../assets/icons/arrow-down.svg'
import {Field} from "formik";
type SelectPropsType={
    options:string[],
    nameField:string
}
export const Select: FC<SelectPropsType> = ({options,nameField}) => {


    let onChangeValue = (event: any) => {

    }
    return (

            <div onSubmit={onChangeValue}>
                <div className={style.selectWrap}>
                    <Field as="select"
                        name={nameField}
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

                    </Field>
                    <img src={arrowDown} alt=""/>
                </div>


                {/*{errors.color &&*/}
                {/*touched.color &&*/}
                {/*<div className="input-feedback">*/}
                {/*    {errors.color}*/}
                {/*</div>}*/}


                {/*<DisplayFormikState {...props} />*/}
            </div>


    );
};

