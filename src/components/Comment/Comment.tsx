import {FC, useState} from "react";
import style from './Comment.module.css'

import {Form, Formik} from "formik";
import {Button} from "../Button/Button";
import {Textarea} from "../Textarea/Textarea";
import {CommentType, ReplayType} from "../../api/post.api";

type commentProps = {
    isReplay?: boolean
    comment?: CommentType
    replay?:ReplayType
}
export const Comment: FC<commentProps> = ({isReplay = false,comment,replay}) => {
    let [inputVisible,setInputVisible]=useState(false);

    return (
        <div className={isReplay ? `${style.replayContainer} ${style.commenContainer}` : style.commenContainer}>
            <h3 className={style.nickName}>{isReplay ? replay?.user.nickname : comment?.user.nickname}</h3>
            <p className={style.textComment}>{isReplay ? replay?.text :comment?.text}</p>
            <div className={style.footerComment}>
                <span className={style.dateComment}>30.11.2022</span>
                <button type={'button'}  className={style.replyComment} onClick={()=>setInputVisible(!inputVisible)}  >Ответить</button>
            </div>

            <Formik
                initialValues={
                    {
                        text: ''
                    }
                }
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting, errors, touched}) => (
                    <Form className={style.formComment} >
                        {inputVisible
                            ? (isReplay
                                ? <>
                                    <label className={style.labelStyle} htmlFor="text">Вы</label>
                                    <Textarea isReplay={true} type="text" nameField="text" errors={errors} touched={touched}/>
                                    <div className={style.buttonContainer}>
                                        <Button type={'submit'} text={'Ответить'} disabled={isSubmitting}/>
                                    </div>

                                </>
                                : <>
                                    <Textarea type="text" nameField="text" placeholder='Напишите комментарий'
                                              errors={errors} touched={touched}/>

                                    <button className={`bigButton ${style.commentButton}`} type="submit"
                                            disabled={isSubmitting}>
                                        Ответить
                                    </button>
                                </>)

                            :<></>
                        }

                    </Form>
                )}
            </Formik>
        </div>

    );
};
