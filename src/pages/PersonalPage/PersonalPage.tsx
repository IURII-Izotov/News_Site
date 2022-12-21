import style from './PersonalPage.module.css'
import React from "react";
import {Button} from "../../components/Button/Button";
import {PersonalData} from "../../components/PersonalData/PersonalData";
import {NewsItem} from "../../components/NewsItem/NewsItem";
import {PopUpAddNews} from "../../components/PopUpAddNews/PopUpAddNews";


export const PersonalPage = () => {
    return (
            <div className={style.pageContainer}>
                <PersonalData/>
                <div className={style.headerWrapper}>
                    <h1 className={style.selectedNewsHeader}>Избранные новости</h1>
                    <div className={style.buttonContainer}>
                        <Button type={'button'} text={'Новая публикация'} />
                    </div>

                </div>
                <PopUpAddNews/>
                <NewsItem selfPublication={true}/>
                <NewsItem selfPublication={true}/>
                <NewsItem selfPublication={true}/>
                <NewsItem selfPublication={true}/>
                <NewsItem selfPublication={true}/>
                <NewsItem selfPublication={true}/>
                <NewsItem selfPublication={true}/>
            </div>



    );
};
