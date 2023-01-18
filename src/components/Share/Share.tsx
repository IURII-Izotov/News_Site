import style from './Share.module.css'
import close from '../../assets/icons/close-button.svg'
import twitter from '../../assets/icons/twitter.svg'
import facebook from '../../assets/icons/facebook.svg'
import telegram from '../../assets/icons/telegram.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'
import copy from '../../assets/icons/copy.svg'
import React, {FC, useEffect, useState} from "react";
import {useGetShortLinkQuery} from "../../api/short_link.api";
import {baseUrl} from "../../api/user.api";
import {
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

type sharePropsType = {
    setIsVisibleShare: any
    id: any

}
export const Share: FC<sharePropsType> = ({setIsVisibleShare, id}) => {
    const [text, setText] = useState('');
    let shortLink = useGetShortLinkQuery(id);
    useEffect(() => {
        setText(shortLink?.data?.result?.full_short_link2);
    }, [shortLink])
    const handleClick = () => {
        navigator.clipboard.writeText(text);
    };
    return (

        <div className={style.shareContainer}>

            <div className={style.shareHead}>
                <h2>Поделиться</h2>
                <img onClick={() => setIsVisibleShare(false)} className={style.imgClose} src={close} alt="close"/>
            </div>
            <div className={style.socialNetworkWrap}>
                <div className={style.socialNetworkContainer}>
                    <TelegramShareButton
                        className={style.socialNetwork}
                        title={''}
                        children={undefined}
                        url={`${baseUrl}post/${id}`}/>
                    <img src={telegram} alt="telegram"/>
                </div>
                <div className={style.socialNetworkContainer}>
                    <TwitterShareButton
                        className={style.socialNetwork}
                        url={`${baseUrl}post/${id}`}
                        children={undefined}/>
                    <img src={twitter} alt="twitter"/>
                </div>
                <div className={style.socialNetworkContainer}>
                    <FacebookShareButton
                        className={style.socialNetwork}
                        quote={''}
                        hashtag={''}
                        children={undefined} url={`${baseUrl}post/${id}`}/>
                    <img src={facebook} alt="facebook"/>
                </div>
                <div className={style.socialNetworkContainer}>
                    <WhatsappShareButton
                        className={style.socialNetwork}
                        children={undefined} url={`${baseUrl}post/${id}`}/>
                    <img src={whatsapp} alt="whatsapp"/>
                </div>

            </div>
            <div className={style.shortLinkWrap}>
                <h2>Короткая ссылка</h2>
                <span className={style.shortLink}>

                    <a className={style.textShortLink} href="">{shortLink?.data?.result?.full_short_link2}</a>
                    <img onClick={() => handleClick()} className={style.imgCopyLink} src={copy} alt="copy"/>
                </span>
            </div>
        </div>
    );
};
