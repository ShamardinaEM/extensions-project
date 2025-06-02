import { useState, useContext } from "react";
import Card from "./Card";
import data from "../data.ts";
import "./CardList.css";
import { ThemeContext } from "./ThemeContext.ts";

export default function CardList() {
  const [filter, setFilter] = useState("all");
  const [activeCards, setActiveCards] = useState<number[]>([]);
  const [cardList, setCardList] = useState(data);
  const { isActive } = useContext(ThemeContext);

  function handleToggle(cardId: number) {
    setActiveCards((cards) =>
      cards.includes(cardId)
        ? cards.filter((id) => id !== cardId)
        : [...cards, cardId]
    );
  }

  function handleRemove(cardId: number) {
    setActiveCards((cards) =>
      cards.includes(cardId) ? cards.filter((id) => id !== cardId) : [...cards]
    );
    setCardList(cardList.filter((card) => card.id !== cardId));
  }

  let buttonAllClassName = isActive
    ? "filter-button light-theme active"
    : "filter-button active";
  let buttonActiveClassName = isActive
    ? "filter-button light-theme"
    : "filter-button";
  let buttonInactiveClassName = isActive
    ? "filter-button light-theme"
    : "filter-button";

  const cardToShow = cardList.filter((card) => {
    const isActiveCard = activeCards.includes(card.id);
    if (filter == "active") {
      buttonActiveClassName += " active";
      buttonAllClassName = isActive
        ? "filter-button light-theme"
        : "filter-button";
      return isActiveCard;
    }
    if (filter == "inactive") {
      buttonInactiveClassName += " active";
      buttonAllClassName = isActive
        ? "filter-button light-theme"
        : "filter-button";
      return !isActiveCard;
    }
    buttonAllClassName = isActive
      ? "filter-button light-theme active"
      : "filter-button active";
    return true;
  });

  return (
    <div>
      <div className={isActive ? "main-section light-theme" : "main-section"}>
        <h1>Extentions List</h1>
        <nav>
          <button
            className={buttonAllClassName}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={buttonActiveClassName}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={buttonInactiveClassName}
            onClick={() => setFilter("inactive")}
          >
            Inactive
          </button>
        </nav>
      </div>
      <div className="cardList">
        {cardToShow.map((card) => {
          return (
            <Card
              id={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              isActiveCard={activeCards.includes(card.id)}
              handleToggle={() => handleToggle(card.id)}
              handleRemove={() => handleRemove(card.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
