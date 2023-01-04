import {NewsItem} from "../../components/NewsItem/NewsItem";
import {Comment} from "../../components/Comment/Comment";
import {useParams} from 'react-router-dom'
import {useGetFullNewsQuery} from '../../api/post.api'
import {Textarea} from "../../components/Textarea/Textarea";
import {Field, Form, Formik} from "formik";
import style from "../../components/PopUpAddNews/AddNews/AddNews.module.css";

export const FullNewsPage = () => {
    let {id} = useParams();
    if (!id) {
        id = '';
    }
    let {data, isLoading} = useGetFullNewsQuery(id);
    console.log(data)
    if (!data) {
        return <div className='noData'>Нет новостей</div>
    }
    return (
        <>

            <NewsItem fullData={data} fullItem={true}/>
            {
                data?.comment?.length
                    ? data?.comment?.map((comment) => {
                        return <>
                            <Comment key={comment.id} comment={comment}/>
                            {
                                comment.child.length ?
                                    comment.child.map((replay) => {
                                        return <Comment replay={replay} isReplay={true}/>
                                    })
                                    : <></>
                            }
                        </>
                    })
                    : <></>
            }
            <Formik
                initialValues={
                    {

                    }
                }
                onSubmit={(values, { setSubmitting }) => {

                }}
            >
                {({ isSubmitting,errors,touched,setFieldValue,values  }) => (


                        <Form className={style.formComment}>
                            <Textarea type="text" nameField="text" placeholder='Напишите комментарий'/>
                            <button className={`bigButton ${style.commentButton}`} type="submit"
                                    disabled={isSubmitting}>
                                Ответить
                            </button>
                        </Form>
                )}
            </Formik>

        </>
    );
};
