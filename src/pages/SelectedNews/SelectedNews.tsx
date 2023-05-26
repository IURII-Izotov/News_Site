import style from './SelectedNews.module.css'
import {NewsItem} from "../../components/NewsItem/NewsItem";
import {useGetSelectNewsQuery} from '../../api/post.api'
import {SkeletonNewsItem} from "../../features/SkeletonNewsItem";


export const SelectedNews = () => {
    let {data,isLoading,isFetching} = useGetSelectNewsQuery();

    return (
        <div className={style.selectedNewsContainer}>
            <h1 className={style.selectedNewsHeader}>Избранные новости</h1>
            {
                isLoading
                ? <div className='loadingBlock'>
                    {[...new Array(4)].map((_, index) => <SkeletonNewsItem key={index}/>)}
                </div>
               : data?.map((news) => {
                    // return <NewsItem data={news} selectedItems={true}/>
                    return <></>
                })
            }

        </div>
    );
};
