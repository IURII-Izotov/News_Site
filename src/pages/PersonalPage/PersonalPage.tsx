import style from './PersonalPage.module.css'
import React, {useEffect, useState} from "react";
import {Button} from "../../components/Button/Button";
import {PersonalData} from "../../components/PersonalData/PersonalData";
import {NewsItem} from "../../components/NewsItem/NewsItem";
import {PopUpAddNews} from "../../components/PopUpAddNews/PopUpAddNews";
import {useGetUserQuery} from "../../api/user.api";
import {useGetAuthorPostsQuery} from "../../api/news.api";
import {NewsType} from "../../api/news.api";


export const PersonalPage = () => {
    let [active,setActive] = useState(false);
    let [author,setAuthor] = useState('');
    let dataUser = useGetUserQuery();
    console.log(dataUser)
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
            <div className={style.pageContainer}>
                <PersonalData data={dataUser?.data}/>
                <div className={style.headerWrapper}>
                    <h1 className={style.selectedNewsHeader}>Избранные новости</h1>
                    <div  className={style.buttonContainer}>
                        <Button onClickHandler={()=>{
                            setActive(true)
                        } } type={'button'} text={'Новая публикация'} />
                    </div>
                </div>
                <PopUpAddNews active={active} setActive={setActive}/>

                {
                    dataLike?.data?.map((likeNews:NewsType)=>{
                        return <NewsItem data = {likeNews} selfPublication={true}/>
                    })
                }
            </div>



    );
};
