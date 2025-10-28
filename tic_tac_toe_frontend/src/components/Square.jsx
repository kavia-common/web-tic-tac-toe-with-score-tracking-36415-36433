import React from 'react';

/**
 * A single square on the board. Renders X or O and handles click events.
 */
// PUBLIC_INTERFACE
export default function Square({ value, onClick, isWinning = false }) {
  const cls = [
    'square',
    value === 'X' ? 'square-x' : '',
    value === 'O' ? 'square-o' : '',
    isWinning ? 'winning' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={cls}
      aria-label={`Square ${value ? 'contains ' + value : 'empty'}`}
      onClick={onClick}
    >
      <span className="square-value">{value || ''}</span>
    </button>
  );
}
