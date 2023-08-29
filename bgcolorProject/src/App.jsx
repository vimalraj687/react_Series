import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className=" w-full h-screen duration-200"
        style={{ background: color }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus
        cumque recusandae? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Error accusamus cumque recusandae?
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              red
            </button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => setColor("Black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
