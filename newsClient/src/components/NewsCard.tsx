import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { NewsModel } from "../models/newsModel";
import { fetchClip, removeClip } from "../store/clipAction";
import { NewsCardStyle } from "../styles/newsCardStyle";

type NewsItem = {
  newsItem: NewsModel;
};

function funcTransDate(date: string): string {
  const newDate = new Date(date);

  return `발행날짜 : ${newDate.getFullYear()}/${newDate.getMonth() + 1}/${
    newDate.getDate() + 2
  } ${newDate.getHours()}:${newDate.getMinutes()}`;
}

export default function NewsCard({ newsItem }: NewsItem): React.ReactElement {
  const [isClip, setIsClip] = useState<boolean>(false);
  const [color, setColor] = useState<string>("#C4C3C3");
  const dispatch = useAppDispatch();
  const clipList = useAppSelector((state) => state.clips.clipList);

  //isClip start select
  const clipClickHandle = () => {
    if (isClip) {
      setColor("#C4C3C3");
      dispatch(removeClip(newsItem.link));
    } else {
      setColor("#F2F202");
      dispatch(fetchClip(newsItem));
    }

    setIsClip((prev) => !prev);
  };

  useEffect(() => {
    funcTransDate(newsItem.pubDate);

    if (clipList.find((item: NewsModel) => item.link === newsItem.link)) {
      setIsClip(true);
      setColor("#F2F202");
    }
  }, [clipList]);

  return (
    <NewsCardStyle>
      <div className="wrapper">
        <a
          className="title"
          href={newsItem.originallink}
          target="_blank"
          rel="noreferrer"
        >
          {newsItem.title}
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="39"
          viewBox="0 0 14 13"
        >
          <path
            style={{
              cursor: "pointer",
            }}
            id="star"
            d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
            transform="translate(-2 -2)"
            fill={color}
            onClick={clipClickHandle}
          />
        </svg>
      </div>
      <span className="description">{newsItem.description}</span>
      <span className="link">{newsItem.link}</span>
      <span className="date">{funcTransDate(newsItem.pubDate)}</span>
    </NewsCardStyle>
  );
}
