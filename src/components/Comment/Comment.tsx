import { FC, useState } from "react";
import style from "./Comment.module.css";

import { Form, Formik } from "formik";
import { Button } from "../Button/Button";
import { Textarea } from "../Textarea/Textarea";
import { CommentType, ReplayType } from "../../api/post.api";
import { useSetReplayMutation } from "../../api/post.api";

type commentProps = {
  isReplay?: boolean;
  comment?: CommentType;
  replay?: ReplayType;
  postID?: string;
  parentID?: number;
};
export const Comment: FC<commentProps> = ({
  isReplay = false,
  comment,
  replay,
  postID,
  parentID,
}) => {
  let [inputVisible, setInputVisible] = useState(false);

  let [setReplay, res] = useSetReplayMutation();
  return (
    <div
      className={
        isReplay ? `${style.replayContainer} ${style.commenContainer}` : style.commenContainer
      }
    >
      <h3 className={style.nickName}>
        {isReplay ? replay?.user.nickname : comment?.user.nickname}
      </h3>
      <p className={style.textComment}>{isReplay ? replay?.text : comment?.text}</p>
      <div className={style.footerComment}>
        <span className={style.dateComment}>30.11.2022</span>
        <button
          type={"button"}
          className={style.replyComment}
          onClick={() => setInputVisible(!inputVisible)}
        >
          Ответить
        </button>
      </div>

      <Formik
        initialValues={{
          post: Number(postID),
          text: "",
          parent: parentID,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setReplay(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched, setFieldValue }) => (
          <Form className={style.formComment}>
            {inputVisible ? (
              <div className={style.replayFormContainer}>
                <label
                  className={style.labelStyle}
                  htmlFor="text"
                >
                  Вы
                </label>
                <div className={style.textareaContainer}>
                  <Textarea
                    setFieldValue={setFieldValue}
                    isReplay={true}
                    type="text"
                    nameField="text"
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <div className={style.buttonContainer}>
                  <Button
                    type={"submit"}
                    text={"Ответить"}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};
