import React, { useState, useContext, useEffect } from "react";
import { context } from "./context";
import NewsItem from "./NewsItem";
import Card from "./Card";

const News = () => {
  const { theme, news } = useContext(context);
  return (
    <>
      <Card className={theme + " news"}>
        <h1>Current News</h1>
        <div className="news-items">
          {news &&
            news.map((item, index) => <NewsItem key={index} item={item} />)}
        </div>
      </Card>
    </>
  );
};

export default News;
