import chevron from "@assets/icons/chevron.svg";
import user from "@assets/icons/user.svg";
import { useEffect, useRef, useState } from "react";
import { Cards } from "../Cards";

import axios from "axios";
import styles from "./Main.module.css";

export const Main = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [authors, setAuthors] = useState<string[]>([]);
  const [filterByAuthor, setFilterByAuthor] = useState<string | null>(null);

  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsSelectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSetActvie = (index: number) => () => {
    setActiveDot(index);
  };

  const handleFilterByAuthor = (author: string) => () => {
    setFilterByAuthor(author);
    setIsSelectOpen(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/authors");
        setAuthors(res.data);
      } catch (error) {
        console.log(error);
        setAuthors([]);
        alert("Ошибка при загрузке данных");
      }
    })();
  }, []);

  return (
    <main>
      <div className={styles.main__container}>
        <div className={styles.main__background}>
          <div className={styles.main__background__image}></div>
          <div className={styles.main__person__image}></div>
          <div className={styles.main__content}>
            <h2>
              Как бизнесу сохранять <br /> IT-кадры на фоне кризиса
            </h2>
            <p>
              Инструменты, которые могут использовать компании <br /> для
              удержания сотрудников
            </p>
            <button type="button">Подробнее</button>

            <div className={styles.main__content__dots__container}>
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`${styles.main__content__dots} ${
                    activeDot === index ? styles.active : ""
                  }`}
                  onClick={handleSetActvie(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.filter__container}>
          <div className={styles.author__select} ref={selectRef}>
            <div
              className={styles.author__select__content}
              onClick={toggleSelect}
            >
              <div className={styles.author__select__text}>
                <img src={user} alt="User" />
                <span> {filterByAuthor || "Все авторы"}</span>
              </div>
              <img
                src={chevron}
                alt="Chevron"
                className={`${styles.chevron} ${
                  isSelectOpen ? styles.rotate : ""
                }`}
              />
            </div>
            {isSelectOpen && (
              <div className={styles.author__select__dropdown}>
                {authors.map((author) => (
                  <div
                    key={author}
                    className={styles.author__select__option}
                    onClick={handleFilterByAuthor(author)}
                  >
                    {author}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.range__inputs}>
            <div className={styles.range__input}>
              <input
                type="date"
                placeholder="От"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </div>
            —
            <div className={styles.range__input}>
              <input
                type="date"
                placeholder="До"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <Cards
        filterByAuthor={filterByAuthor}
        dateFrom={dateFrom}
        dateTo={dateTo}
      />
    </main>
  );
};
