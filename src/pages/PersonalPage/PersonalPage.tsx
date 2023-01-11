import style from './PersonalPage.module.css'
import React, {useEffect, useState} from "react";
import {Button} from "../../components/Button/Button";
import {PersonalData} from "../../components/PersonalData/PersonalData";
import {NewsItem} from "../../components/NewsItem/NewsItem";
import {PopUpAddNews} from "../../components/PopUpAddNews/PopUpAddNews";
import {useGetUserQuery} from "../../api/user.api";
import {useGetAuthorPostsQuery} from "../../api/post.api";
import {NewsType} from "../../api/post.api";
import {SkeletonNewsItem} from "../../features/SkeletonNewsItem";
import {SkeletonUserData} from "../../features/SkeletonUserData";


export const PersonalPage = () => {
    let [active,setActive] = useState(false);
    let dataUser = useGetUserQuery();
    let dataLike= useGetAuthorPostsQuery();

    if (active){
        document.body.style.position ="sticky"
        // document.body.style ="position: sticky;margin: 0 auto;height: 100vh;width: 100%;top: 0;"
        // document.body.style ="position: sticky;margin: 0 auto;height: 100vh;width: 100%;top: 0;"
        // document.body.style ="position: sticky;margin: 0 auto;height: 100vh;width: 100%;top: 0;"
        // document.body.style.overflowY = "hidden";

    } else{
        // document.body.style.overflowY = "";
        // document.body.style.width = "";


    }
    return (
        <>
            <div className={style.pageContainer}>
                {
                    dataUser.isLoading
                        ? <SkeletonUserData/>
                        : <PersonalData data={dataUser.data} isFetching = {dataUser.isFetching}  />
                }

                <div className={style.headerWrapper}>
                    <h1 className={style.selectedNewsHeader}>Мои публикации</h1>
                    <div  className={style.buttonContainer}>
                        <Button onClickHandler={()=>{
                            setActive(true)
                        } } type={'button'} text={'Новая публикация'} />
                    </div>
                </div>

                {   dataLike.isFetching
                    ?<div className='loadingBlock'>
                        { [...new Array(4)].map((_,index)=> <SkeletonNewsItem key={index} />)}
                    </div>
                    : dataLike?.data?.map((likeNews:NewsType)=>{
                        return <NewsItem key={likeNews.id} data = {likeNews} selfPublication={true}/>
                    })


                }
            </div>
            <PopUpAddNews active={active} setActive={setActive}/>
            </>
    );
};
