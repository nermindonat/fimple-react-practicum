import React from "react";
import { useState, useEffect } from "react";
import Square from "../square/Square";
import "./game.css";

const Possibilities = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Game = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkForWinner();
    checkIfTie();

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
    }
  }, [result]);

  const clickSquare = (square) => {
    setBoard(
      board.map((value, index) => {
        if (index === square && value === "") {
          return player;
        }

        return value;
      })
    );
  };

  const checkForWinner = () => {
    Possibilities.forEach((currentPossibility) => {
      const firstPlayer = board[currentPossibility[0]];
      if (firstPlayer === "") {
        return;
      }
      let foundWinPoss = true;

      currentPossibility.forEach((index) => {
        if (board[index] !== firstPlayer) {
          foundWinPoss = false;
        }
      });

      if (foundWinPoss) {
        setResult({ winner: player, state: "won" });
      }
    });
  };

  const checkIfTie = () => {
    let filledArea = true;
    board.forEach((square) => {
      if (square === "") {
        filledArea = false;
      }
    });

    if (filledArea) {
      setResult({ winner: "Game Is Tied", state: "Tie" });
    }
  };

  return (
    <div>
      <div className="board">
        <div className="row">
          <Square
            value={board[0]}
            clickSquare={() => {
              clickSquare(0);
            }}
          />
          <Square
            value={board[1]}
            clickSquare={() => {
              clickSquare(1);
            }}
          />
          <Square
            value={board[2]}
            clickSquare={() => {
              clickSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            value={board[3]}
            clickSquare={() => {
              clickSquare(3);
            }}
          />
          <Square
            value={board[4]}
            clickSquare={() => {
              clickSquare(4);
            }}
          />
          <Square
            value={board[5]}
            clickSquare={() => {
              clickSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            value={board[6]}
            clickSquare={() => {
              clickSquare(6);
            }}
          />
          <Square
            value={board[7]}
            clickSquare={() => {
              clickSquare(7);
            }}
          />
          <Square
            value={board[8]}
            clickSquare={() => {
              clickSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
