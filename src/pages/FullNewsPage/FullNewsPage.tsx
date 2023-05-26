import { NewsItem } from "../../components/NewsItem/NewsItem";
import { Comment } from "../../components/Comment/Comment";
import { useParams } from "react-router-dom";
import { useGetFullNewsQuery, useSetCommentMutation } from "../../api/post.api";
import { Textarea } from "../../components/Textarea/Textarea";
import { Form, Formik } from "formik";
import style from "./FullNews.module.css";
import { FullNewsSkeleton } from "../../features/FullNewsSkeleton";
import React from "react";

export const FullNewsPage = () => {
  let { id } = useParams();
  if (!id) {
    id = "";
  }
  let { data, isLoading } = useGetFullNewsQuery(id);
  let [setComment, res] = useSetCommentMutation();

  return (
    <>
      {" "}
      {isLoading ? (
        <FullNewsSkeleton />
      ) : (
        <NewsItem
          data={data}
          fullItem={true}
        />
      )}
      {data?.comment?.length ? (
        data?.comment?.map(comment => {
          return (
            <>
              <Comment
                postID={id}
                parentID={comment.id}
                key={comment.id}
                comment={comment}
              />
              {}
              {comment.child.length ? (
                comment.child.map(replay => {
                  return (
                    <Comment
                      key={replay.id}
                      replay={replay}
                      isReplay={true}
                    />
                  );
                })
              ) : (
                <></>
              )}
            </>
          );
        })
      ) : (
        <></>
      )}
      <Formik
        initialValues={{
          post: data?.id,
          text: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setComment(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched, setFieldValue, values }) => (
          <Form className={style.formComment}>
            <Textarea
              setFieldValue={setFieldValue}
              type="text"
              nameField="text"
              placeholder="Напишите комментарий"
            />
            <button
              className={`bigButton ${style.commentButton}`}
              type="submit"
              disabled={isSubmitting}
            >
              Ответить
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
