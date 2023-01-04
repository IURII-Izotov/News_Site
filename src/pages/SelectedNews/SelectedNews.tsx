import style from './SelectedNews.module.css'
import React from "react";
import {NewsItem} from "../../components/NewsItem/NewsItem";
import {useGetSelectNewsQuery} from '../../api/post.api'

export const SelectedNews = () => {
    let {data,isLoading} = useGetSelectNewsQuery()
    console.log(data)
    return (
        <div className={style.selectedNewsContainer}>
            <h1 className={style.selectedNewsHeader}>Избранные новости</h1>
            {
                data?.map((news)=>{
                   return <NewsItem data={news} selectedItems={true}/>
                })
            }

        </div>
    );
};
