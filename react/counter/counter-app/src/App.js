import "./App.css";
import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <div className="container">
      <button
        onClick={function () {
          setNumber(number - 1);
        }}
      >
        -
      </button>
      <h1>{number}</h1>
      <button
        onClick={function () {
          setNumber(number + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

function App() {
  return <Counter />;
}

export default App;
