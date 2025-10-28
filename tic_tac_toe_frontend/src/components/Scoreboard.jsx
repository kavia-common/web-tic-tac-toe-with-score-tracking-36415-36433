import React from 'react';

/**
 * Scoreboard displays X wins, O wins, and draws.
 * It also shows turn indicator or result message.
 */
// PUBLIC_INTERFACE
export default function Scoreboard({ scores, currentPlayer, gameOver, winnerInfo, draw }) {
  const statusText = gameOver
    ? winnerInfo
      ? `Winner: ${winnerInfo.winner}`
      : 'Draw!'
    : `Turn: ${currentPlayer}`;

  const statusColor = winnerInfo
    ? (winnerInfo.winner === 'X' ? 'var(--primary)' : 'var(--success)')
    : draw
    ? 'var(--muted)'
    : 'var(--text)';

  return (
    <section aria-label="Scoreboard" className="game-wrapper">
      <div className="scoreboard">
        <div className="score-card score-x" aria-label="Score X">
          <p className="score-title">PLAYER X</p>
          <p className="score-value">{scores.X}</p>
        </div>
        <div className="score-card score-draws" aria-label="Draws">
          <p className="score-title">DRAWS</p>
          <p className="score-value">{scores.draws}</p>
        </div>
        <div className="score-card score-o" aria-label="Score O">
          <p className="score-title">PLAYER O</p>
          <p className="score-value">{scores.O}</p>
        </div>
      </div>

      <div className="status" style={{ borderColor: statusColor }}>
        {statusText}
      </div>
    </section>
  );
}
