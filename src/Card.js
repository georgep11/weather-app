import React from "react";

const Card = (props) => {
  const classes = "Card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
