import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

export default function App() {
  const name = "reykajacylathosimba";

  return (
    <div className="style">
      <Header name={name} />
      <Main number="1" content="Guybrush" />
      <Main number="2" content="LeChuck" />
      <Main />
    </div>
  );
}
