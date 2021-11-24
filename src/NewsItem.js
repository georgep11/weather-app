import React from "react";

const NewsItem = ({ item }) => {
  return (
    <a className="news-item" href={item.url} target="_blank">
      <img src={item.image} alt="No Image" />
      <p>{item.title}</p>
    </a>
  );
};

export default NewsItem;
