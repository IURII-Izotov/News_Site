import {FC} from "react";
import style from './Comment.module.css'

export const Comment:FC = () => {

    return (
        <>
            <h3 className={style.nickName}>Олег Петров</h3>
            <p className={style.textComment}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi at, consectetur deserunt eius esse laudantium minima, molestias neque nobis obcaecati perspiciatis veniam!</p>
            <div className={style.footerComment}>
                <span className={style.dateComment}>30.11.2022</span>
                <a className={style.replyComment} href="">Ответить</a>
            </div>
            <form className={style.formComment}>
                <input className={style.commentInput} type="text"/>
                <button className={style.commentButton} type='submit'>Ответить</button>
            </form>
        </>

    );
};
