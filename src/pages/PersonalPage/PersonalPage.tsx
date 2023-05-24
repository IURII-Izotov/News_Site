import style from "./PersonalPage.module.css";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { PersonalData } from "../../components/PersonalData/PersonalData";
import { NewsItem } from "../../components/NewsItem/NewsItem";
import { PopUpAddNews } from "../../components/PopUpAddNews/PopUpAddNews";
import { useGetUserQuery } from "../../api/user.api";
import { useGetAuthorPostsQuery } from "../../api/post.api";
import { NewsType } from "../../api/post.api";
import { SkeletonNewsItem } from "../../features/SkeletonNewsItem";
import { SkeletonUserData } from "../../features/SkeletonUserData";

let dataUser = {
  isLoading: false,
  isFetching: false,
  data: {
    id: 2,
    name: "As",
    last_name: "D",
    nickname: "My nickname",
    profile_image:
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0ieHhsYXJnZSI+CiAgICA8Zz4KICAgICAgICA8Y2lyY2xlIGN4PSI2NCIgY3k9IjY0IiByPSI2NCIgZmlsbD0iIzg5OTNhNCIgLz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIKICAgICAgICAgICAgICAgIGQ9Ik0xMDMsMTAyLjEzODggQzkzLjA5NCwxMTEuOTIgNzkuMzUwNCwxMTggNjQuMTYzOCwxMTggQzQ4LjgwNTYsMTE4IDM0LjkyOTQsMTExLjc2OCAyNSwxMDEuNzg5MiBMMjUsOTUuMiBDMjUsODYuODA5NiAzMS45ODEsODAgNDAuNiw4MCBMODcuNCw4MCBDOTYuMDE5LDgwIDEwMyw4Ni44MDk2IDEwMyw5NS4yIEwxMDMsMTAyLjEzODggWiIgLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIKICAgICAgICAgICAgICAgIGQ9Ik02My45OTYxNjQ3LDI0IEM1MS4yOTM4MTM2LDI0IDQxLDM0LjI5MzgxMzYgNDEsNDYuOTk2MTY0NyBDNDEsNTkuNzA2MTg2NCA1MS4yOTM4MTM2LDcwIDYzLjk5NjE2NDcsNzAgQzc2LjY5ODUxNTksNzAgODcsNTkuNzA2MTg2NCA4Nyw0Ni45OTYxNjQ3IEM4NywzNC4yOTM4MTM2IDc2LjY5ODUxNTksMjQgNjMuOTk2MTY0NywyNCIgLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=",
  },
};
let dataLike = {
  isLoading: false,
  isFetching: false,
  data: {},
};

export const PersonalPage = () => {
  let [active, setActive] = useState(false);
  // let dataUser = useGetUserQuery();
  let dataLike = useGetAuthorPostsQuery();
  if (active) {
    document.body.style.position = "sticky";
  }

  return (
    <>
      <div className={style.pageContainer}>
        {dataUser.isLoading ? (
          <SkeletonUserData />
        ) : (
          <PersonalData
            data={dataUser.data}
            isFetching={dataUser.isFetching}
          />
        )}
        <div className={style.headerWrapper}>
          <h1 className={style.selectedNewsHeader}>Мои публикации</h1>
          {/* Only for large screen*/}
          <div className={`${style.buttonContainer} ${style.forLargeScreens}`}>
            <Button
              onClickHandler={() => {
                setActive(true);
              }}
              type={"button"}
              text={"Новая публикация"}
            />
          </div>
          {/* Only for small screen*/}
          <div className={`${style.buttonContainer} ${style.forSmallScreens}`}>
            <Button
              onClickHandler={() => {
                setActive(true);
              }}
              type={"button"}
              text={"+"}
            />
          </div>
        </div>

        {dataLike.isFetching ? (
          <div className="loadingBlock">
            {[...new Array(4)].map((_, index) => (
              <SkeletonNewsItem key={index} />
            ))}
          </div>
        ) : (
          dataLike?.data?.map((likeNews: NewsType) => {
            return (
              <NewsItem
                key={likeNews.id}
                data={likeNews}
                selfPublication={true}
              />
            );
          })
        )}
      </div>
      <PopUpAddNews
        active={active}
        setActive={setActive}
      />
    </>
  );
};
