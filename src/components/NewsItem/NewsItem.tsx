import style from './NewsItem.module.css'
import {FC} from "react";
import share from '../../assets/icons/share.svg'
import heart from '../../assets/icons/heart.svg'

type NewsItemType={
    fullItem?:boolean
}
export const NewsItem:FC<NewsItemType> = ({fullItem=true}) => {
    let text = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
    let firsSentence:string='';
    let restText:string = ''
    if(fullItem){
        let arr = text.split('.');
        firsSentence=arr.splice(0, 2).join('.');
        restText = arr.join('.');
    }
    return (
        <div className={style.wrapper}>
            {
                fullItem
                    ? <img src="" alt="back arrow"/>
                    :<></>
            }
        <div className={fullItem ? style.contentContainerFull :style.contentContainer }>
            {
                fullItem
                    ? <>

                        <div className={style.headerInfo}>
                            <span className={style.date}>29.11.2022</span>
                            <img className={style.like} src={heart} alt="like"/>
                        </div>
                    </>
                    :<div className={style.imgContainer}>
                        <img className={style.imgNews}
                             src="https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_300_200_int_c1-1x.jpg"
                             alt="img news"/>
                    </div>

            }

            <div className={style.contentWrap}>
                {
                    fullItem
                        ?<></>
                        :<div className={style.headerInfo}>
                            <span className={style.date}>29.11.2022</span>
                            <img src={heart} alt="like"/>
                        </div>
                }

                <div className={style.mainContent}>
                    <h2 className={style.headerNews}>Заголовок новости</h2>
                    {
                        fullItem
                        ?   <>
                                <p className={style.textNews}>{firsSentence}</p>
                                <div className={style.imgContainer}>
                                    <img className={style.imgNews} src="https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_300_200_int_c1-1x.jpg" alt="img news"/>
                                </div>
                                <p className={style.textNews}>{restText}</p>
                            </>
                        :<p className={style.textNews}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc vulputate libero et velit interdum, ac
                                aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent
                                per conubia nostra, per inceptos himenaeos.</p>
                    }

                    {
                        fullItem
                            ?<></>
                            :<a href="#" className={style.linkNews}>Читать дальше</a>}
                    <img className={style.imgShare} src={share} alt="share"/>
                </div>

            </div>

        </div>
            </div>
    );
};
