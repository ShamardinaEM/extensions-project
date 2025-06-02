import { useContext } from "react";
import "./Card.css";
import { ThemeContext } from "./ThemeContext";

interface CardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  isActiveCard: boolean;
  handleToggle: () => void;
  handleRemove: () => void;
}

export default function Card({
  id,
  title,
  description,
  image,
  isActiveCard,
  handleToggle,
  handleRemove,
}: CardProps) {
  const { isActive } = useContext(ThemeContext);
  return (
    <div key={id} className={isActive ? "card light-theme" : 'card'}>
      <div className={isActive ? "title-section light-theme" : 'title-section'}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
      <div className="card-controls">
        <button className={isActive ? "delete-button light-theme" : 'delete-button'} onClick={handleRemove}>
          Remove
        </button>
        <div
          className={`toggle-switch ${isActiveCard ? "on" : "off"}`}
          onClick={handleToggle}
        >
          <div className="toggle-thumb" />
        </div>
      </div>
    </div>
  );
}
