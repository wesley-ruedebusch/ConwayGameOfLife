import React, { useEffect, useState } from "react";

//import sub-components and styler form game css
import Controls from "./Controls";
import "./Game.css";

// set up the box component
const Box = (props) => {
  const selectBox = () => {
    props.selectBox(props.row, props.col);
  };

  return <div className={props.boxClass} id={props.id} onClick={selectBox} />;
};

// setting up the game grid
const Grid = (props) => {
  const width = props.cols * 14;
  var rowsArr = [];

  var boxClass = "";
  // refactto to map TODO?
  for (var i = 0; i < props.rows; i++) {
    for (var j = 0; j < props.cols; j++) {
      let boxId = i + "_" + j;
      // get classes from CSS for cell
      boxClass = props.gridFull[i][j] ? "box on" : "box off";
      // push box component into array
      rowsArr.push(
        <Box
          boxClass={boxClass}
          key={boxId}
          boxId={boxId}
          row={i}
          col={j}
          selectBox={props.selectBox}
        />
      );
    }
  }

  return (
    <div className="grid" style={{ width: width }}>
      {rowsArr}
    </div>
  );
};

const GameOfLife = () => {
  const [generation, setGeneration] = useState(0);
  const [speed, setSpeed] = useState(10);
  const [rows, setRowsd] = useState(30);
  const [cols, setCols] = useState(50);
  const [gridFull, setGridFull] = useState(
    Array(rows)
      .fill()
      .map(() => {
        return Array(cols).fill(false);
      })
  );
  // allows you to select a box to toggle it's state
  const selectBox = (row, col) => {
    const gridCopy = arrayClone(gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    setGridFull(gridCopy);
  };

  const randomSeed = () => {
    console.log("SEED!");
    const gridCopy = arrayClone(gridFull);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }
    setGridFull(gridCopy);
  };

  useEffect(() => {
    randomSeed();
  }, []);

  return (
    <div>
      <h2>Game</h2>
      <Grid gridFull={gridFull} rows={rows} cols={cols} selectBox={selectBox} />

      <Controls />
      <h3>Generations: {generation}</h3>
    </div>
  );
};

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}
export default GameOfLife;