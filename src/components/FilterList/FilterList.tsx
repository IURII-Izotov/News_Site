import style from './FilterList.module.css'
import {FilterItem} from "./FilterItem";
import React, {FC, useState} from "react";
import {Formik, Field, Form} from 'formik';
import {setFilterValue} from '../../redux/slices/filterSlice'
import {useDispatch} from "react-redux";
type tagType = {
    id: number,
    name: string
}
type FilterListPropsType = {
    data: tagType[],
}
export const FilterList: FC<FilterListPropsType> = ({data}) => {
    let dispatch =useDispatch();
    return (
        <div className={style.filterWrap}>
            <h2 className={style.headerFilter}>Фильтрация</h2>
            <Formik
                initialValues={{
                    tag: [],
                }}
                onSubmit={(values,{ setSubmitting }) => {
                    let arrValues = values.tag;
                    let newArr: any = arrValues.map((tag: string) => {
                        let arr = tag?.split('');
                        for (let i = 0; i <= arr.length; i++) {
                            if (arr[i] == '#') {
                                arr[i] = '%23';
                            }
                        }
                        return arr
                    })
                    let joinStr = newArr.map((str: string[]) => {
                        return str.join('')
                    })
                    let arrToStr = joinStr.join(',');
                    console.log(arrToStr)
                    // let strValues = values.tag.join(',')
                    // console.log(strValues)
                    dispatch(setFilterValue(arrToStr))
                    setSubmitting(false);
                }}
            >
                {({values}) => (
                    <Form>
                        <div role="group" aria-labelledby="checkbox-group">
                            {
                               data?.map((item)=>{
                                   return <FilterItem key={item.id} value={item.name} name='tag'/>
                               })
                            }

                        </div>
                        <button className={style.formButton} type='submit'>Применить</button>
                    </Form>
                )}
            </Formik>
        </div>

    );
};
