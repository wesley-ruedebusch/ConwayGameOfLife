import React from "react";

const Rules = () => {
  return (
    <div>
      <h2>Rules:</h2>
      <ol>
        <li>
          Any live cell with fewer than two live neighbors dies, as if by
          underpopulated.
        </li>
        <li>
          Any live cell with two or three live neighbors lives on to the next
          generation.
        </li>
        <li>
          Any live cell with more than three live neighbors dies, as if by
          overpopulation.
        </li>
        <li>
          Any dead cell with exactly three live neighbors becomes a live cell,
          as if by reproduction.
        </li>
      </ol>{" "}
    </div>
  );
};

export default Rules;