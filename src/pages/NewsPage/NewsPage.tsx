import style from './NewsPage.module.css'

import {NewsItem} from "../../components/NewsItem/NewsItem";

import {useGetNewsQuery,useGetTagsQuery} from '../../api/post.api'
import {FilterList} from "../../components/FilterList/FilterList";
import {FC} from "react";


type newsPagePropsType={
    data:any
    isLoading:boolean
}

export const NewsPage:FC<newsPagePropsType> = ({data,isLoading}) => {
    // const {filterValue} = useSelector((state:any) => state.filter)
    // console.log(filterValue)
    // let {data,isLoading}=useGetNewsQuery(filterValue);
    let filterListData = useGetTagsQuery();


    return (
        <>
            <div className={style.wrapper}>
                <FilterList data={filterListData.data}/>
                <div className={style.newsContentWrap}>
                    {isLoading
                        ? <div className={style.loadingBlock}>Loading...</div>
                        : data?.map((item:any)=>{
                            return <NewsItem key={item.id} data={item}/>
                        })

                    }

                </div>
            </div>

        </>
    );
};
