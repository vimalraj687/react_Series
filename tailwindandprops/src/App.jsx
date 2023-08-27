import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  const myObj = {
    name: "vimal",
    age: 4,
  };
  const newArr = [1, 2, 3, 4];
  return (
    <>
      <h1 className="text-3xl font-bold underline p-4 bg-green-400 text-white">
        Hello world!
      </h1>
      <Card username="Rj Coders" someObj={newArr} btntext="clickme" />
      <Card
        username="Parivartan tech point"
        someObj={newArr}
        btntext="visit me"
      />
    </>
  );
}

export default App;
