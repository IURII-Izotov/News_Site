import style from "./NewsPage.module.css";
import { NewsItem } from "../../components/NewsItem/NewsItem";
import { useGetNewsQuery, useGetTagsQuery } from "../../api/post.api";
import { FilterList } from "../../components/FilterList/FilterList";
import { FC, useEffect } from "react";
import { SkeletonNewsItem } from "../../features/SkeletonNewsItem";
import { useSelector } from "react-redux";


type newsPagePropsType = {
  data?: any;
  isLoading?: boolean;
  isFetching?: boolean;
};

export const NewsPage: FC<newsPagePropsType> = () => {
    const { filterValue, searchText } = useSelector((state: any) => state.filter);
    let {
        data: newsData,
        isFetching,
        isLoading,
    } = useGetNewsQuery({ contains: searchText, tag: filterValue });
    // let { data: tagsData } = useGetTagsQuery();
    console.log(newsData)
    if (newsData?.status === "error") return <div>{newsData.error}</div>;
    // if (tagsData?.status === "error") return <div>{tagsData.error}</div>;
    // useEffect(()=>{
    //     fetch("http://localhost:3001/api/post").then(res=>res.json()).then(res=>console.log(res))
    // },[])
    return (
        <div className={style.wrapperPage}>
            {/* <FilterList
        data={filterListData.data}
        isLoading={filterListData.isLoading}
      /> */}

      {isLoading ? (
        <div className="loadingBlock">
          {[...new Array(4)].map((_, index) => (
            <SkeletonNewsItem key={index} />
          ))}
        </div>
      ) : (
        <div className={style.newsContentWrap}>
          {newsData?.data.map(item => {
            return (
              <NewsItem
                isFetching={isFetching}
                isLoading={isLoading}
                key={item.id}
                data={item}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
