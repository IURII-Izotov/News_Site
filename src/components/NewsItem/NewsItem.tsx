import style from './NewsItem.module.css'
import {FC} from "react";
import share from '../../assets/icons/share.svg'
import heart from '../../assets/icons/heart.svg'
import heartRed from '../../assets/icons/heart-red.svg'
import arrowLeft from '../../assets/icons/arrow-left.svg'
import trash from '../../assets/icons/trash.svg'
import image from '../../assets/icons/image.svg'
import {baseUrl, NewsType} from "../../api/newsApi";


type NewsItemType = {
    fullItem?: boolean
    selectedItems?: boolean
    selfPublication?: boolean
    data?: NewsType
}
export const NewsItem: FC<NewsItemType> = ({
                                               fullItem = false,
                                               selectedItems = false,
                                               selfPublication = false,
                                               data
                                           }) => {
    let text = data?.text;
    let firsSentence: string | undefined = '';
    let restText: string | undefined = ''
    if (fullItem) {
        let arr = text?.split('.');
        firsSentence = arr?.splice(0, 2).join('.');
        restText = arr?.join('.');
    }
    return (
        <div className={style.wrapper}>
            {
                fullItem
                    ? <img className={style.arrowLeft} src={arrowLeft} alt="back arrow"/>
                    : <></>
            }
            <div className={fullItem ? style.contentContainerFull : style.contentContainer}>
                {
                    fullItem
                        ? <>

                            <div className={style.headerInfo}>
                                <span className={style.date}>29.11.2022</span>
                                <img className={style.like} src={data?.is_liked ? heartRed : heart} alt="like"/>
                            </div>
                        </>
                        : <div className={style.imgContainer}>
                            {
                                data?.image
                                    ? <img className={style.imgNews}
                                           src={`${baseUrl}${data?.image}`}
                                           alt="img news"/>
                                    : <div className={style.noImg}>
                                        <img src={image} alt=""/>
                                    </div>
                            }

                        </div>

                }

                <div className={fullItem ? style.fullContentWrap : style.contentWrap}>
                    {
                        fullItem
                            ? <></>
                            : <div className={style.headerInfo}>
                                <span className={style.date}>29.11.2022</span>
                                <img src={data?.is_liked
                                    ? heartRed
                                    : selfPublication ? trash : heart} alt="like"
                                     className={selfPublication ? style.iconStyle : ''}/>
                            </div>
                    }

                    <div className={fullItem ? style.contentFullWrapper : style.mainContent}>
                        <h2 className={style.headerNews}>{data?.title}</h2>
                        {
                            fullItem
                                ? <>
                                    <p className={style.textNews}>{firsSentence}</p>
                                    <img className={style.imgNewsFull}
                                         src={data?.image}
                                         alt="img news"/>
                                    <p className={style.textNews}>{restText}</p>
                                </>
                                : <p className={style.textNews}>{data?.short_desc}</p>
                        }

                        {
                            fullItem
                                ? <></>
                                : <a href="#" className={style.linkNews}>Читать дальше</a>}
                        <img className={style.imgShare} src={share} alt="share"/>
                    </div>

                </div>

            </div>
        </div>
    );
};
