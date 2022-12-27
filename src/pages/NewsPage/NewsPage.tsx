import style from './NewsPage.module.css'

import {NewsItem} from "../../components/NewsItem/NewsItem";

import {useGetNewsQuery} from '../../api/newsApi'
import {useEffect} from "react";

export const NewsPage = () => {
    let {data}=useGetNewsQuery('');
    useEffect(()=>{
        console.log(data);
    },[data])
    return (
        <>
            <div className={style.wrapper}>
                {/*<FilterList/>*/}
                <div className={style.newsContentWrap}>
                    {
                        data?.map((item)=>{
                            return <NewsItem key={item.id} data={item}/>
                        })
                    }

                </div>
            </div>

        </>
    );
};
