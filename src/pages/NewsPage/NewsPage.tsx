import style from './NewsPage.module.css'
import React from "react";
import {NewsItem} from "../../components/NewsItem/NewsItem";
import {FilterList} from "../../components/FilterList/FilterList";

export const NewsPage = () => {
    return (
        <>
            <div className={style.wrapper}>
                <FilterList/>
                <div className={style.newsContentWrap}>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                </div>
            </div>

        </>
    );
};
