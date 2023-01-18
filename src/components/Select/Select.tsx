import style from './Select.module.css'
import {FC} from "react";
import {Field} from "formik";
type SelectPropsType={
    options:string[],
    nameField:string
}
export const Select: FC<SelectPropsType> = ({options,nameField}) => {
    return (
                <div className={style.selectWrap}>
                    <Field as="select"
                        name={nameField}
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
                </div>

    );
};

