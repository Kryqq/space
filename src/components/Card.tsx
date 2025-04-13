import React from "react";
import "./Card.css";

interface Props {
  date: string;
  title: string;
  description: string;
  author: string;
}

export const Card: React.FC<Props> = ({ date, title, description, author }) => {
  return (
    <div className="article__card">
      <div className="article__card__date">{date} </div>
      <h3 className="article__card__title">{title}</h3>
      <p className="article__card__description">{description}</p>
      <div className="article__card__author">{author}</div>
    </div>
  );
};
