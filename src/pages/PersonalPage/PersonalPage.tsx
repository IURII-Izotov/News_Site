import style from './PersonalPage.module.css'
import React from "react";
import {Button} from "../../components/Button/Button";


export const PersonalPage = () => {
    return (

            <div className={style.pageContainer}>
                <div className={style.headerWrapper}>
                    <h1 className={style.selectedNewsHeader}>Избранные новости</h1>
                    <Button type={'button'} text={'Новая публикация'} />
                </div>

            </div>



    );
};
