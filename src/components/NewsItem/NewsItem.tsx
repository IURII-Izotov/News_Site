import style from './NewsItem.module.css'
import {FC} from "react";
import share from '../../assets/icons/share.svg'
import heart from '../../assets/icons/heart.svg'
export const NewsItem:FC = () => {
    return (
        <div className={style.contentContainer}>
            <div className={style.imgContainer}>
                <img className={style.imgNews} src="https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_300_200_int_c1-1x.jpg" alt="img news"/>
            </div>
            <div className={style.contentWrap}>
                <div className={style.headerInfo}>
                    <span className={style.date}>29.11.2022</span>
                    <img src={heart} alt="like"/>
                </div>
                <div className={style.mainContent}>
                    <h2 className={style.headerNews}>Заголовок новости</h2>
                    <p className={style.textNews}>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Nunc vulputate libero et velit interdum, ac
                        aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos.</p>
                    <a href="#" className={style.linkNews}>Читать дальше</a>
                    <img className={style.imgShare} src={share} alt="share"/>
                </div>

            </div>

        </div>
    );
};
