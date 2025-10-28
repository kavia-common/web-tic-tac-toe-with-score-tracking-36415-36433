import React from 'react';
import Square from './Square';

/**
 * Board renders the 3x3 grid and forwards click events to parent.
 * It applies a "winning" style for squares whose indices are part of the winningLine.
 */
// PUBLIC_INTERFACE
export default function Board({ squares, onSquareClick, winningLine = null, gameOver = false }) {
  /** Determine if a given index is part of the winning line. */
  const isWinning = (idx) => Array.isArray(winningLine) && winningLine.includes(idx);

  return (
    <section aria-label="Tic Tac Toe board" className="game-wrapper">
      <div className="status" role="status" aria-live="polite">
        {gameOver
          ? 'Game Over'
          : 'Your turn'}
      </div>

      <div className="board" role="grid" aria-label="3 by 3 grid">
        {squares.map((value, idx) => (
          <Square
            key={idx}
            value={value}
            onClick={() => onSquareClick(idx)}
            isWinning={isWinning(idx)}
          />
        ))}
      </div>
    </section>
  );
}
