import { useState } from "react";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

export default function Layout() {
  const [totalMovesPlayed, setTotalMovesPlayed] = useState([
    Array(9).fill(null),
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [currentMove, setCurrentMove] = useState(null);

  const currentMoves =
    totalMovesPlayed[
      currentMove !== null ? currentMove : totalMovesPlayed.length - 1
    ];
  console.log(currentMoves);
  console.log(totalMovesPlayed);
  let winner;

  for (let combination of WINNING_COMBINATIONS) {
    const [first, second, third] = [
      currentMoves[combination[0]],
      currentMoves[combination[1]],
      currentMoves[combination[2]],
    ];

    if (first && first === second && first === third) {
      winner = { player: first, isWinner: true };
    }
  }

  function handleNewMoveClick(index) {
    setCurrentPlayer((cur) => (cur === "X" ? "O" : "X"));

    setTotalMovesPlayed((cur) => {
      console.log(currentMove, cur);
      const newMove = [...cur[currentMove ? currentMove : cur.length - 1]];
      newMove[index] = currentPlayer;
      console.log(newMove);
      const next =
        currentMove !== null ? cur.slice(0, currentMove + 1) : [...cur];

      return [...next, newMove];
    });

    setCurrentMove(null);
  }

  function handleMove(moveNumber) {
    setCurrentMove(moveNumber);
    const move = totalMovesPlayed[moveNumber];
    const sum = move.reduce((acc, cur) => (cur ? acc + 1 : acc), 0);
    console.log(sum); // even = 'X' and odd = 'O'
    setCurrentPlayer(sum % 2 === 0 ? "X" : "O");
  }

  return (
    <div className="grid grid-cols-2 gap-2 max-w-[500px] bg-purple-800 rounded p-2">
      <DisplayMessage>
        {winner?.isWinner
          ? `Winner: ${winner.player}`
          : `Next Move: ${currentPlayer}`}
      </DisplayMessage>
      <Boxes currentMoves={currentMoves} onNewMove={handleNewMoveClick} />
      <History totalMovesPlayed={totalMovesPlayed} onMove={handleMove} />
    </div>
  );
}

function DisplayMessage({ children }) {
  return (
    <h3 className="col-span-2 text-xl uppercase bg-rose-600 rounded p-1">
      {children}
    </h3>
  );
}

function Boxes({ currentMoves, onNewMove }) {
  return (
    <div className="grid grid-cols-3 gap-2 self-start">
      {currentMoves.map((move, i) => (
        <Box key={i} move={move} value={i} onNewMove={onNewMove} />
      ))}
    </div>
  );
}

function Box({ move, onNewMove, value }) {
  return (
    <button
      className="h-[55px] border-none outline-none rounded cursor-pointer w-[100%] bg-stone-50 text-stone-800"
      onClick={() => onNewMove(value)}
    >
      {move}
    </button>
  );
}

function History({ totalMovesPlayed, onMove }) {
  return (
    <div className="flex flex-col gap-2">
      {totalMovesPlayed.map((moves, i) => (
        <button key={i} onClick={() => onMove(i)}>
          {i === 0 ? `${i + 1} Go to game start` : `${i + 1} Go to move #${i}`}
        </button>
      ))}
    </div>
  );
}
