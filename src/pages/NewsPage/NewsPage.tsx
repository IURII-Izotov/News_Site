import style from './NewsPage.module.css'

import {NewsItem} from "../../components/NewsItem/NewsItem";

import {useGetNewsQuery,useGetTagsQuery} from '../../api/post.api'
import {FilterList} from "../../components/FilterList/FilterList";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export const NewsPage = () => {
    let dispatch=useDispatch();
    const {filterValue} = useSelector((state:any) => state.filter)

    let {data,isLoading}=useGetNewsQuery(filterValue);
    let filterListData = useGetTagsQuery();


    return (
        <>
            <div className={style.wrapper}>
                <FilterList setSearch={data} data={filterListData.data}/>
                <div className={style.newsContentWrap}>
                    {isLoading
                        ? <div className={style.loadingBlock}>Loading...</div>
                        : data?.map((item)=>{
                            return <NewsItem key={item.id} data={item}/>
                        })

                    }

                </div>
            </div>

        </>
    );
};
