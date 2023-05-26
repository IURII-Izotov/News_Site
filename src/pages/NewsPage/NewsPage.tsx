import style from './NewsPage.module.css'
import {NewsItem} from "../../components/NewsItem/NewsItem";
import {useGetNewsQuery, useGetTagsQuery} from '../../api/post.api'
import {FilterList} from "../../components/FilterList/FilterList";
import {FC} from "react";
import {SkeletonNewsItem} from '../../features/SkeletonNewsItem'
import {useSelector} from "react-redux";

type newsPagePropsType = {
    data?: any
    isLoading?: boolean
    isFetching?:boolean
}

export const NewsPage: FC<newsPagePropsType> = () => {
    const {filterValue,searchText} = useSelector((state:any) => state.filter);
    let {data,isFetching,isLoading}=useGetNewsQuery({searchText,filterValue});
    let filterListData = useGetTagsQuery();
    return (
        <div className={style.wrapperPage}>

            <FilterList data={filterListData.data} isLoading={filterListData.isLoading}/>

            {isLoading
                ?
                <div className='loadingBlock'>
                    {[...new Array(4)].map((_, index) => <SkeletonNewsItem key={index}/>)}
                </div>
                :
                <div className={style.newsContentWrap}>
                    {data?.map((item: any) => {
                        return <NewsItem  isFetching={isFetching} isLoading={isLoading} key={item.id} data={item}/>
                    })}
                </div>
            }
        </div>

    );
};
