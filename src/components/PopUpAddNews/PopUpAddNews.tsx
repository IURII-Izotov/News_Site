import style from './PopUpAddNews.module.css'
import {AddNews} from "./AddNews/AddNews";
import {FC} from "react";

type PopUpAddNewsType = {
    active: boolean
    setActive: any
}

export const PopUpAddNews: FC<PopUpAddNewsType> = ({active, setActive}) => {
    return (
              <div onClick={()=>setActive(false)} className={active ? `${style.modalContainer} ${style.active}`:style.modalContainer}>
                    <AddNews setActive={setActive}/>
              </div>

    );
};
