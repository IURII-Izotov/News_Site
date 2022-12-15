import style from './FilterList.module.css'
import {FilterItem} from "./FilterItem";
import React from "react";

export const FilterList = () => {
    return (
            <div className={style.filterWrap}>
                <h2 className={style.headerFilter}>Фильтрация</h2>
                <form>
                    <FilterItem name='Спорт'/>
                    <FilterItem name='Политика'/>
                    <FilterItem name='Звезды'/>
                    <FilterItem name='Исскуство'/>
                    <FilterItem name='Мода'/>
                    <button className={style.formButton} type='submit'>Применить</button>
                </form>
            </div>

    );
};
