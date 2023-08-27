import React, { useState, useRef } from "react";

const UseRefDemo = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const z = useRef(0);
  console.log("Render");
  return (
    <div className="m-4 p-2 w-96  bg-black text-white">
      <div>
        Let : {x}{" "}
        <button
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
          className="bg-green-300 p-2 m-2"
        >
          Toggle Let
        </button>
      </div>
      <div>
        State : {y}
        <button onClick={() => setY(y + 1)} className="bg-red-300 p-2 m-2">
          Toggle State
        </button>
      </div>
      <div>
        Ref: {z.current}
        <button
          onClick={() => (z.current = z.current + 1)}
          className="bg-yellow-300 p-2 m-2"
        >
          Toggle Reg
        </button>
      </div>
    </div>
  );
};

export default UseRefDemo;
