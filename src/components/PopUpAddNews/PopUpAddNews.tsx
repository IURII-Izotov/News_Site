import style from './PopUpAddNews.module.css'
import {AddNews} from "./AddNews/AddNews";



export const PopUpAddNews = () => {
 return(
     <div className={style.modalContainer}>
        <AddNews/>
     </div>

    );
};
