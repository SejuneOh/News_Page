import React, { useEffect, useState } from "react";
import { NewsModel } from "../models/newsModel";
import { NewsCardStyle } from "../styles/newsCardStyle";

type NewsItem = {
  newsItem: NewsModel;
};

function funcTransDate(date: string): string {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate() + 2;
  const time = `${newDate.getHours()}:${newDate.getMinutes()}`;

  const result = `발행 날짜 : ${year}/${month}/${day} ${time}`;

  return result;
}

export default function NewsCard({ newsItem }: NewsItem): React.ReactElement {
  const [clip, setClip] = useState(false);
  const [color, setColor] = useState<string>("#C4C3C3");

  //clip start select
  const clipClickHandle = () => {
    setClip((prev) => !prev);

    if (clip) {
      setColor("#F2F202");
    } else {
      setColor("#C4C3C3");
    }
  };

  useEffect(() => {
    funcTransDate(newsItem.pubDate);
  }, []);

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
