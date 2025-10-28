import React, { useState, useMemo } from 'react';
import './App.css';
import './index.css';
import Board from './components/Board';
import Scoreboard from './components/Scoreboard';
import Controls from './components/Controls';
import { calculateWinner, isDraw, initialBoard } from './utils/gameUtils';

// PUBLIC_INTERFACE
function App() {
  /**
   * This is the main Tic Tac Toe app component.
   * It manages the game state (board, turn, winner), the scoreboard across rounds,
   * and provides controls for starting a new round and resetting the entire game.
   * Retro theme styling is applied via App.css and index.css.
   */
  const [squares, setSquares] = useState(initialBoard());
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const [winningLine, setWinningLine] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const currentPlayer = xIsNext ? 'X' : 'O';

  const winnerInfo = useMemo(() => calculateWinner(squares), [squares]);
  const draw = useMemo(() => !winnerInfo && isDraw(squares), [squares, winnerInfo]);

  const handleSquareClick = (index) => {
    if (squares[index] || gameOver) return; // prevent move if filled or game over

    const next = squares.slice();
    next[index] = currentPlayer;
    setSquares(next);

    // After placing a mark, check for winner or draw
    const res = calculateWinner(next);
    if (res) {
      setWinningLine(res.line);
      setGameOver(true);
      // update scores
      setScores((prev) => ({ ...prev, [res.winner]: prev[res.winner] + 1 }));
      return;
    }

    if (isDraw(next)) {
      setGameOver(true);
      setScores((prev) => ({ ...prev, draws: prev.draws + 1 }));
      return;
    }

    // continue game
    setXIsNext((prev) => !prev);
  };

  // PUBLIC_INTERFACE
  const handleNewRound = () => {
    /** Starts a new round, keeping accumulated scores. */
    setSquares(initialBoard());
    setXIsNext(true);
    setWinningLine(null);
    setGameOver(false);
  };

  // PUBLIC_INTERFACE
  const handleResetAll = () => {
    /** Resets the game board and clears scores. */
    setSquares(initialBoard());
    setXIsNext(true);
    setWinningLine(null);
    setGameOver(false);
    setScores({ X: 0, O: 0, draws: 0 });
  };

  return (
    <div className="app-shell">
      <div className="crt-overlay" aria-hidden="true"></div>
      <main className="container">
        <header className="header">
          <h1 className="title">Tic Tac Toe</h1>
          <p className="subtitle">
            Two Player • Retro Mode
          </p>
        </header>

        <Scoreboard scores={scores} currentPlayer={currentPlayer} gameOver={gameOver} winnerInfo={winnerInfo} draw={draw} />

        <Board
          squares={squares}
          onSquareClick={handleSquareClick}
          winningLine={winningLine}
          gameOver={gameOver}
        />

        <Controls
          onNewRound={handleNewRound}
          onResetAll={handleResetAll}
          xIsNext={xIsNext}
          gameOver={gameOver}
        />

        <footer className="footer">
          <span className="tiny">Accents: #3b82f6 • #06b6d4</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
