import React from 'react';

/**
 * Controls for the game: New Round (keeps scores) and Reset All (clears scores).
 */
// PUBLIC_INTERFACE
export default function Controls({ onNewRound, onResetAll, xIsNext, gameOver }) {
  return (
    <section className="game-wrapper" aria-label="Game controls">
      <div className="controls">
        <button type="button" className="btn btn-primary" onClick={onNewRound}>
          ➕ New Round
        </button>
        <button type="button" className="btn btn-danger" onClick={onResetAll}>
          ♻️ Reset All
        </button>
      </div>
      <div className="status" role="status" aria-live="polite" style={{ marginTop: 10 }}>
        {gameOver ? 'Press New Round to play again.' : `Next: ${xIsNext ? 'X' : 'O'}`}
      </div>
    </section>
  );
}
