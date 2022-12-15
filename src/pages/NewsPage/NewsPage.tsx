import style from './NewsPage.module.css'
import React from "react";
import {NewsItem} from "../../components/NewsItem/NewsItem";

export const NewsPage = () => {
    return (
        <div className={style.newsContentWrap}>
                <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>

        </div>

    );
};
