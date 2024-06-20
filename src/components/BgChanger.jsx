import React, { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("red"); // Default color

  console.log("What is color::", color);
  return (
    <div
      className="w-full h-screen duration-200 text-white"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-8 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            className="p-3 bg-black rounded-md outline-none shadow-lg font-bold"
            style={{ backgroundColor: "green" }}
            onClick={()=> setColor("green")}
          >
            Green
          </button>

          <button
            className="p-3 bg-black rounded-md outline-none shadow-lg font-bold text-white"
            style={{ backgroundColor: "black"}}
            onClick={() => setColor("black")}
          >
            Black
          </button>

          <button
            className="p-3 bg-black rounded-md outline-none shadow-lg font-bold"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>

          <button
            className="p-3 bg-black rounded-md outline-none shadow-lg font-bold"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>

          <button
            className="p-3 bg-black rounded-md outline-none shadow-lg font-bold"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>

          <button
            className="p-3 bg-black rounded-md outline-none shadow-lg font-bold"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>

          <button
            className="p-3 bg-black rounded-md outline-none shadow-lg font-bold"
            style={{ backgroundColor: "tan" }}
            onClick={() => setColor("tan")}
          >
            Tan
          </button>

          <button
            className="p-3 bg-black rounded-md outline-none shadow-lg font-bold"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>

          <button
            className="p-3 bg-black rounded-md outline-none shadow-lg font-bold"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>

          <button
            className="p-3 bg-black rounded-md outline-none shadow-lg font-bold"
            style={{ backgroundColor: "aqua" }}
            onClick={() => setColor("aqua")}
          >
            Aqua
          </button>

          <button
            className="p-3 bg-black rounded-md outline-none shadow-lg font-bold"
            style={{ backgroundColor: "brown" }}
            onClick={() => setColor("brown")}
          >
            Brown
          </button>
        </div>
      </div>
    </div>
  );
}
export default BgChanger;
