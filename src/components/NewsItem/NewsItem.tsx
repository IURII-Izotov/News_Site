import style from "./NewsItem.module.css";
import { FC, useEffect, useState } from "react";
import share from "../../assets/icons/share.svg";
import heart from "../../assets/icons/heart.svg";
import heartRed from "../../assets/icons/heart-red.svg";
import heartGray from "../../assets/icons/heart-gr.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import trash from "../../assets/icons/trash.svg";
import image from "../../assets/icons/image.svg";
import { FullNewsType } from "../../api/post.api";
import { Link } from "react-router-dom";
import { useDeletePostMutation, usePostLikeMutation } from "../../api/post.api";
import { Share } from "../Share/Share";
import { useNavigate } from "react-router-dom";
import { PostGet } from "../../../contract/api";

type NewsItemType = {
  fullItem?: boolean;
  selectedItems?: boolean;
  selfPublication?: boolean;
  data: Extract<PostGet["response"], { data: any }>["data"][number];
  isLoading?: boolean;
  isFetching?: boolean;
};

export const NewsItem: FC<NewsItemType> = ({
  fullItem = false,
  selfPublication = false,
  data,
  selectedItems,
  isLoading,
  isFetching,
}) => {
  let text = data.text;
  let firstSentence: string | undefined = "";
  let restText: string | undefined = "";
  if (fullItem) {
    let arr = text.split(".");
    firstSentence = arr.splice(0, 2).join(".");
    restText = arr.join(".");
  }
  let [likeFetch, setLikeFetch] = useState(false);
  let [deletePost] = useDeletePostMutation();
  let [postLike, resLike] = usePostLikeMutation();
  let [isVisibleShare, setIsVisibleShare] = useState(false);
  let [isLiked, setIsLiked] = useState(data.liked);
  let [isLikedFull, setIsLikedFull] = useState(data.liked);

  useEffect(() => {
    if (!isFetching && !selectedItems) {
      setLikeFetch(false);
    }
  }, [isFetching, data, resLike]);

  useEffect(() => {
    if (resLike.isLoading && !selectedItems) {
      setLikeFetch(true);
    }
  }, [resLike, data]);
  const navigate = useNavigate();
  let onClickBackArrow = () => {
    navigate(-1);
  };
  let date = new Date(data.createdAt);
  return (
    <div className={fullItem ? style.wrapperFullItem : style.wrapper}>
      {fullItem ? (
        <img
          onClick={() => onClickBackArrow()}
          className={style.arrowLeft}
          src={arrowLeft}
          alt="back arrow"
        />
      ) : (
        <></>
      )}
      <div className={fullItem ? style.contentContainerFull : style.contentContainer}>
        {fullItem ? (
          <div className={style.headerInfo}>
            <span className={style.date}>
              {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
            </span>
            <img
              onClick={() => {
                postLike(data.id);
                setIsLikedFull(!isLikedFull);
              }}
              className={style.like}
              src={isLikedFull ? heartRed : heart}
              alt="like"
            />
          </div>
        ) : (
          <div className={style.imgContainer}>
            {data.coverImage && (
              <img
                className={style.imgNews}
                src={`data:image/png;base64,${data.coverImage}`}
                alt="img news"
              />
            )}
          </div>
        )}

        <div className={fullItem ? style.fullContentWrap : style.contentWrap}>
          {fullItem ? (
            <></>
          ) : (
            <div className={style.headerInfo}>
              <span className={style.date}>
                {date.getDate()}.{date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}.
                {date.getFullYear()}
              </span>
              <span>
                {date.getHours()}:{date.getMinutes()}
              </span>
              {!selfPublication ? (
                likeFetch ? (
                  <img
                    src={heartGray}
                    alt="like"
                    className={selfPublication ? "" : style.iconStyleLoading}
                  />
                ) : (
                  <img
                    onClick={() => {
                      postLike(data?.id);
                      if (!selectedItems) {
                        setLikeFetch(!likeFetch);
                        setIsLiked(!isLiked);
                      }
                    }}
                    src={isLiked ? heartRed : heart}
                    alt="like"
                    className={selfPublication ? "" : style.iconStyle}
                  />
                )
              ) : (
                <img
                  src={trash}
                  alt="like"
                  onClick={() => deletePost(data?.id)}
                  className={selfPublication ? style.iconStyle : ""}
                />
              )}
            </div>
          )}

          <div className={fullItem ? style.contentFullWrapper : style.mainContent}>
            {fullItem ? (
              <>
                <h2 className={style.headerNews}>{data.title}</h2>

                <p className={style.textNews}>{firstSentence}</p>
                {data.coverImage && (
                  <>
                    <img
                      className={style.imgNewsFull}
                      src={`data:image/png;base64,${data.coverImage}`}
                      alt="img news"
                    />
                    <p className={style.textNews}>{restText}</p>
                  </>
                )}
              </>
            ) : (
              <>
                <h2 className={style.headerNews}>{data?.title}</h2>
                <p className={style.textNews}>{data.title}</p>
              </>
            )}

            {fullItem ? (
              <></>
            ) : (
              <Link
                to={`/post/${data?.id}`}
                className={style.linkNews}
              >
                Читать дальше&gt;&gt;
              </Link>
            )}
            <div className={style.shareWrap}>
              <img
                onClick={() => {
                  setIsVisibleShare(!isVisibleShare);
                }}
                className={style.imgShare}
                src={share}
                alt="share"
              />
              {isVisibleShare ? (
                <Share
                  id={data.id}
                  setIsVisibleShare={setIsVisibleShare}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
