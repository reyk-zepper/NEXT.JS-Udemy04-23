import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

export default function App() {
  const name = "reykajacylathosimba";

  const [number, setNumber] = useState(0);
  const handleIncreaseClick = () => {
    setNumber(number + 1);
  };
  const handleCardClick = () => {
    setCard(!card);
  };

  const [card, setCard] = useState(false);

  return (
    <div className="style">
      <Header name={name} />
      <button onClick={handleIncreaseClick}>+</button>
      <button onClick={handleCardClick}>card</button>
      <Main number={number} content="Guybrush" card={card} />
      <Main number="2" content="LeChuck" card={card} />
      <Main card={card} />
    </div>
  );
}
