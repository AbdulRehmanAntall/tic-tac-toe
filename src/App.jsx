import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Board from './pages/Board'
import Square from './pages/Square'
import './App.css'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  function handleClick(index) {
    if (squares[index] || winner) {
      if (!winner) alert('Value already inserted');
      return;
    }

    const newSquares = squares.slice();
    if (xIsNext) {
      setXIsNext(false);
      newSquares[index] = 'X';
    } else {
      setXIsNext(true);
      newSquares[index] = 'O';
    }
    setSquares(newSquares);

    const gameWinner = checkWinner(newSquares);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  }

  function checkWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board squares={squares} handleClick={handleClick} />
      {winner ? (
        <h2>Winner: {winner}</h2>
      ) : (
        <h2>Next Turn: {xIsNext ? 'X' : 'O'}</h2>
      )}
    </>
  )
}

export default App
