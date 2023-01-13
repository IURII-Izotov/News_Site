import style from './NewsPage.module.css'

import {NewsItem} from "../../components/NewsItem/NewsItem";

import {useGetTagsQuery} from '../../api/post.api'
import {FilterList} from "../../components/FilterList/FilterList";
import {FC} from "react";
import {FilterListItemSkeleton} from '../../features/FilterListItemSkeleton'
import {SkeletonNewsItem} from '../../features/SkeletonNewsItem'

type newsPagePropsType={
    data:any
    isLoading:boolean
}

export const NewsPage:FC<newsPagePropsType> = ({data,isLoading}) => {
    let filterListData = useGetTagsQuery();
    return (
            <div className={style.wrapperPage}>
                <FilterList data={filterListData.data} isLoading={filterListData.isLoading}/>

                {isLoading
                        ?
                        <div className='loadingBlock'>
                            { [...new Array(4)].map((_,index)=> <SkeletonNewsItem key={index} />)}
                        </div>
                        :
                        <div className={style.newsContentWrap}>
                            {   data?.map((item:any)=>{
                                return <NewsItem key={item.id} data={item}/>
                            })}
                        </div>
                    }
            </div>

    );
};
