import style from './NewsPage.module.css'
import React, {useEffect} from "react";
import {NewsItem} from "../../components/NewsItem/NewsItem";
import {FilterList} from "../../components/FilterList/FilterList";
import {useSelector} from "react-redux";
import {fetchNews} from "../../redux/slices/newsSlice";

export const NewsPage = () => {
    useEffect(()=>{
        fetchNews();
    },[])

    const {items,status} = useSelector((state:any) => state.news)
    console.log(items);
    return (
        <>
            <div className={style.wrapper}>
                {/*<FilterList/>*/}
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
