import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Header from "./components/Header";
import { ThemeContext } from "./components/ThemeContext";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  if (isActive) document.body.classList.add('light-theme');
  else document.body.classList.remove('light-theme');
  return (
    <ThemeContext.Provider value={{ isActive, setIsActive }}>
      <Header />
      <CardList />
    </ThemeContext.Provider>
  );
}
