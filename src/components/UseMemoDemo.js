import React, { useEffect, useState, useMemo } from "react";
import { findNthPrime } from "../utils/prime";
const UseMemoDemo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log("Render");

  // const primt = findNthPrime(text);
  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 border border-black" +
        (isDarkTheme && " bg-black text-white")
      }
    >
      <div>
        <button
          className="bg-green-300 p-2 m-2"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <label>Input: </label>
        <input
          className="text-black"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span>{prime}</span>
      </div>
    </div>
  );
};

export default UseMemoDemo;
