import axios from "axios";
import React, { useEffect, useState } from "react";
import "../apiMock";
import { Card } from "./Card";
import "./CardsGrid.css";

type Card = {
  id: number;
  date: string;
  title: string;
  description: string;
  author: string;
};

interface Props {
  filterByAuthor: string | null;
  dateFrom: string;
  dateTo: string;
}

export const Cards: React.FC<Props> = ({
  filterByAuthor,
  dateFrom,
  dateTo,
}) => {
  const [cards, setCards] = useState<Card[]>([]);

  const handleFilter = (card: Card) => {
    const matchesAuthor =
      filterByAuthor === "Все авторы" ||
      filterByAuthor === null ||
      card.author === filterByAuthor;

    const matchesDate =
      (!dateFrom || card.date >= dateFrom) && (!dateTo || card.date <= dateTo);

    return matchesAuthor && matchesDate;
  };

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
      {cards.filter(handleFilter).map((card) => (
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
