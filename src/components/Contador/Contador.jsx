import React from "react";
import "./Contador.scss";
import { useState } from "react";

export const Contador = () => {
  const [count, setCount] = useState(0);
  return (
    <article className="counter">
      <h2>{count}</h2>
      <span>
        <button
          className="plus-button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Aumentar
        </button>
        <button
          className="rest-button"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Disminuir
        </button>
      </span>
    </article>
  );
};
