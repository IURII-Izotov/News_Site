import style from './FilterList.module.css'
import {FilterItem} from "./FilterItem";
import React, {FC, useState} from "react";
import {Formik, Form} from 'formik';
import {setFilterValue} from '../../redux/slices/filterSlice'
import {useDispatch} from "react-redux";
import {FilterListItemSkeleton} from "../../features/FilterListItemSkeleton";
import filter from "../../assets/icons/filter.svg";

type tagType = {
    id: number,
    name: string
}
type FilterListPropsType = {
    data: tagType[],
    isLoading: boolean
}
export const FilterList: FC<FilterListPropsType> = ({data, isLoading}) => {
    let dispatch = useDispatch();
    let [filterDisplay, setFilterDisplay] = useState(true);
    let tagsArrToStr = (arrTags: string[]) => {
        let newArr: any = arrTags.map((tag: string) => {
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
        return arrToStr
    }
    return (
        <>
            {/* Only on < 700px screen */}
            <img onClick={() => setFilterDisplay(!filterDisplay)} className={style.filterIcon} src={filter}/>

            <div
                className={`${filterDisplay ? style.filterWrapHide : ''} ${style.filterWrap} ${filterDisplay ? style.filterWrapHide : ''}`}>
                <h2 className={style.headerFilter}>Фильтрация</h2>
                {
                    isLoading
                        ? <div>
                            {[...new Array(6)].map((_, index) => <FilterListItemSkeleton key={index}/>)}
                        </div>

                        : <Formik
                            initialValues={{
                                tag: [],
                            }}
                            onSubmit={(values, {setSubmitting}) => {
                                let strTags = tagsArrToStr(values.tag);
                                dispatch(setFilterValue(strTags))
                                setSubmitting(false);
                            }}
                        >
                            {({values, setFieldValue, setSubmitting}) => (
                                <Form>
                                    <div className={style.checkboxContainer} role="group" aria-labelledby="checkbox-group">
                                        {
                                            data?.map((item) => {
                                                return <FilterItem onChange={(e: any) => {
                                                    let tagArr: string[] = []
                                                    if (e.target.checked) {
                                                        tagArr = [...values.tag, e.target.value]
                                                    }
                                                    if (!e.target.checked) {
                                                        let newTagArr = values.tag.filter((item) => e.target.value !== item)
                                                        tagArr = newTagArr;
                                                    }
                                                    setFieldValue('tag', tagArr);
                                                    let strTags = tagsArrToStr(tagArr);
                                                    dispatch(setFilterValue(strTags));
                                                    setSubmitting(false);
                                                }
                                                } key={item.id} value={item.name} name='tag'/>
                                            })
                                        }
                                    </div>
                                    <button className={style.formButton} type='submit'>Применить</button>
                                </Form>
                            )}
                        </Formik>
                }

            </div>
        </>
    );
};
