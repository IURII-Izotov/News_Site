import style from './NewsPage.module.css'

import {NewsItem} from "../../components/NewsItem/NewsItem";

import {useGetNewsQuery} from '../../api/post.api'
import {FilterList} from "../../components/FilterList/FilterList";

export const NewsPage = () => {
    let {data,isLoading}=useGetNewsQuery();

    return (
        <>
            <div className={style.wrapper}>
                <FilterList/>
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
