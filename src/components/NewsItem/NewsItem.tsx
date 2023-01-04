import style from './NewsItem.module.css'
import {FC} from "react";
import share from '../../assets/icons/share.svg'
import heart from '../../assets/icons/heart.svg'
import heartRed from '../../assets/icons/heart-red.svg'
import arrowLeft from '../../assets/icons/arrow-left.svg'
import trash from '../../assets/icons/trash.svg'
import image from '../../assets/icons/image.svg'
import {baseUrl, FullNewsType, NewsType} from "../../api/post.api";
import {Link} from "react-router-dom";

type NewsItemType = {
    fullItem?: boolean
    selectedItems?: boolean
    selfPublication?: boolean
    data?: NewsType
    fullData?:FullNewsType
}
export const NewsItem: FC<NewsItemType> = ({
                                               fullItem = false,
                                               selfPublication = false,
                                               data,
                                               fullData,
                                               selectedItems
                                           }) => {
    let text = fullData?.text;
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
                        ?   <div className={style.headerInfo}>
                                <span className={style.date}>29.11.2022</span>
                                <img className={style.like} src={fullData?.is_liked ? heartRed : heart} alt="like"/>
                            </div>
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
                                {!selfPublication ?
                                    <img src={data?.is_liked
                                        ? heartRed
                                        : heart} alt="like"
                                         className={selfPublication ? style.iconStyle : ''}/>
                                         :
                                    <img src={trash} alt="like"
                                         className={selfPublication ? style.iconStyle : ''}/>
                                }
                            </div>
                    }

                    <div className={fullItem ? style.contentFullWrapper : style.mainContent}>


                        {
                            fullItem
                                ? <>
                                    <h2 className={style.headerNews}>{fullData?.title}</h2>

                                    <p className={style.textNews}>{firsSentence}</p>
                                    {
                                        fullData?.image
                                            ? <>
                                                <img className={style.imgNewsFull}
                                                     src={`${baseUrl}/${fullData?.image}`}
                                                     alt="img news"/>
                                                <p className={style.textNews}>{restText}</p>
                                            </>
                                            :<></>
                                    }

                                </>

                                : <>
                                    <h2 className={style.headerNews}>{data?.title}</h2>
                                    <p className={style.textNews}>{data?.short_desc}</p>
                                </>

                        }

                        {
                            fullItem
                                ? <></>
                                : <Link to={
                                    `/post/${data?.id}`
                                } className={style.linkNews}>Читать дальше</Link>}
                        <img className={style.imgShare} src={share} alt="share"/>
                    </div>

                </div>

            </div>
        </div>
    );
};
