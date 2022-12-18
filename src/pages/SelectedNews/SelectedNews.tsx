import style from './SelectedNews.module.css'
import React from "react";
import {NewsItem} from "../../components/NewsItem/NewsItem";


export const SelectedNews = () => {
    return (
        <div className={style.selectedNewsContainer}>
            <h1 className={style.selectedNewsHeader}>Избранные новости</h1>
            <NewsItem selectedItems={true}/>
            <NewsItem selectedItems={true}/>
            <NewsItem selectedItems={true}/>
            <NewsItem selectedItems={true}/>
            <NewsItem selectedItems={true}/>
            <NewsItem selectedItems={true}/>
            <NewsItem selectedItems={true}/>
        </div>
    );
};
