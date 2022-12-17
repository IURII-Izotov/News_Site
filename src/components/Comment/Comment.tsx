import {FC} from "react";
import style from './Comment.module.css'
import {InputComponent} from "../Input/Input";
import {Form, Formik} from "formik";

export const Comment:FC = () => {

    return (
        <>
            <h3 className={style.nickName}>Олег Петров</h3>
            <p className={style.textComment}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi at, consectetur deserunt eius esse laudantium minima, molestias neque nobis obcaecati perspiciatis veniam!</p>
            <div className={style.footerComment}>
                <span className={style.dateComment}>30.11.2022</span>
                <a className={style.replyComment} href="">Ответить</a>
            </div>

            <Formik
                initialValues={
                    {
                        text:''
                    }
                }
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting,errors,touched }) => (

                        <Form className={style.formComment} action='#'>
                            <div className={style.commentInput}>
                                <InputComponent type="text" nameField="text" errors={errors} touched ={touched}/>
                            </div>

                            <button className={ `bigButton ${style.commentButton}`} type="submit" disabled={isSubmitting} >
                                Ответить
                            </button>
                        </Form>
                )}
            </Formik>
        </>

    );
};
