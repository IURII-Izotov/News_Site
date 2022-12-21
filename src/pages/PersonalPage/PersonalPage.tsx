import style from './PersonalPage.module.css'
import React, {useState} from "react";
import {Button} from "../../components/Button/Button";
import {PersonalData} from "../../components/PersonalData/PersonalData";
import {NewsItem} from "../../components/NewsItem/NewsItem";
import {PopUpAddNews} from "../../components/PopUpAddNews/PopUpAddNews";


export const PersonalPage = () => {
    let [active,setActive] = useState(false);
    if (active){
        document.body.style.overflowY = "hidden";
    } else{
        document.body.style.overflowY = "";
    }
    return (
            <div className={style.pageContainer}>
                <PersonalData/>
                <div className={style.headerWrapper}>
                    <h1 className={style.selectedNewsHeader}>Избранные новости</h1>
                    <div  className={style.buttonContainer}>
                        <Button onClickHandler={()=>{
                            setActive(true)
                        } } type={'button'} text={'Новая публикация'} />
                    </div>
                </div>
                <PopUpAddNews active={active} setActive={setActive}/>
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
