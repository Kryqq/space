import axios from "axios";
import React, { useEffect, useState } from "react";
import "../apiMock";
import "./CardsGrid.css";
import { Card } from "./Card";

type Card = {
  id: number;
  date: string;
  title: string;
  description: string;
  author: string;
};

export const Cards: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/articles");
        setCards(res.data);
      } catch (error) {
        console.log(error);
        setCards([]);
        alert("Ошибка при загрузке данных");
      }
    })();
  }, []);

  return (
    <div className="article__grid">
      {cards.map((card) => (
        <div className="article__grid__item" key={card.id}>
          <Card
            date={card.date}
            title={card.title}
            description={card.description}
            author={card.author}
          />
        </div>
      ))}
    </div>
  );
};
