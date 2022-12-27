import style from './FilterList.module.css'
import {FilterItem} from "./FilterItem";
import React from "react";

export const FilterList = () => {
    return (
            <div className={style.filterWrap}>
                <h2 className={style.headerFilter}>Фильтрация</h2>
                <form>
                    <FilterItem key='1' name='Спорт'/>
                    <FilterItem key='2' name='Политика'/>
                    <FilterItem key='3' name='Звезды'/>
                    <FilterItem key='4' name='Исскуство'/>
                    <FilterItem key='5' name='Мода'/>
                    <button className={style.formButton} type='submit'>Применить</button>
                </form>
            </div>

    );
};
