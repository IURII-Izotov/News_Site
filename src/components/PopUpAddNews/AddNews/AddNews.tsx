import style from "./AddNews.module.css";
import { Form, Formik } from "formik";
import download from "../../../assets/icons/download.svg";
import closeButton from "../../../assets/icons/close-button.svg";
import { InputComponent } from "../../Input/Input";
import { Button } from "../../Button/Button";
import { Textarea } from "../../Textarea/Textarea";
import { ButtonIcon } from "../../Button/ButtonIcon/ButtonIcon";
import { ChangeEvent, FC, useRef, useState } from "react";
import { useCreatePostMutation, useGetTagsQuery } from "../../../api/post.api";

type AddNewsType = {
  setActive: any;
};

export const AddNews: FC<AddNewsType> = ({ setActive }) => {
  let tagsList = useGetTagsQuery(undefined);
  let [setPost, res] = useCreatePostMutation();
  const inputRef = useRef<any>();
  let [file, setFile] = useState<any>();
  const onDownloadClick = () => {
    inputRef?.current?.click();
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Formik
      initialValues={{
        image: "",
        title: "",
        text: "",
        short_desc: "",
        tag: "",
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        let formData = new FormData();
        if (values.image) {
          formData.append("image", file, file?.name);
        }
        formData.append("image", "");
        formData.append("title", values.title!);
        formData.append("short_desc", values.short_desc!);
        formData.append("text", values.text!);
        formData.append("tag", values.tag!);
        setPost(formData);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting, errors, touched, setFieldValue, values, handleChange }) => (
        <div
          className={style.formContainer}
          onClick={e => e.stopPropagation()}
        >
          <img
            onClick={() => setActive(false)}
            className={style.closeButton}
            src={closeButton}
            alt=""
          />
          <Form className={style.formWrap}>
            <div className="formFieldWrap">
              <span>Обложка новости</span>
              <div className={style.btnDownloadWrap}>
                <input
                  onChange={e => {
                    handleFileChange(e);
                    setFieldValue("image", e.target.value);
                  }}
                  ref={inputRef}
                  name="image"
                  type="file"
                  accept={"image/*,.png,.jpg,.gif,.web"}
                  className={style.inputHidden}
                />
                <ButtonIcon
                  onClick={onDownloadClick}
                  text={"Загрузить"}
                  type={"button"}
                  icon={download}
                  isFullButton={true}
                />
              </div>
            </div>
            <div className="formFieldWrap">
              <label htmlFor="title">Заголовок</label>
              <div className={style.inputContainer}>
                <InputComponent
                  onChange={handleChange}
                  value={values.title}
                  type="text"
                  nameField="title"
                  errors={errors}
                  touched={touched}
                />
              </div>
            </div>
            <div className="formFieldWrap">
              <label htmlFor="short_desc">Краткое описание</label>
              <div className={style.inputContainer}>
                <InputComponent
                  onChange={handleChange}
                  value={values.short_desc}
                  type="text"
                  nameField="short_desc"
                  errors={errors}
                  touched={touched}
                />
              </div>
            </div>
            <div className="formFieldWrap">
              <label htmlFor="text">Текст новости</label>
              <div className={style.textareaContainer}>
                <Textarea
                  value={values.text}
                  setFieldValue={setFieldValue}
                  nameField="text"
                  isChangeHeight={false}
                  errors={errors}
                  touched={touched}
                />
              </div>
            </div>
            <div className="formFieldWrap">
              <label htmlFor="tag">Выбрать категорию</label>
              <div className={style.inputContainer}>
                <InputComponent
                  onChange={handleChange}
                  value={values.tag}
                  nameField="tag"
                  type="text"
                  list="tags"
                />
                <datalist id="tags">
                  {tagsList?.data?.status === "success" ? (
                    tagsList.data.data.map(tag => {
                      return <option key={tag.name}>{tag.name}</option>;
                    })
                  ) : (
                    <div>{tagsList.data?.error}</div>
                  )}
                </datalist>
              </div>
            </div>
            <div className={style.buttonContainer}>
              <Button
                type="submit"
                text="Создать"
                disabled={isSubmitting}
              />
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
