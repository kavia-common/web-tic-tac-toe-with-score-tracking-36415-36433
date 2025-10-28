const LINES = [
  [0, 1, 2], // rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // cols
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diags
  [2, 4, 6],
];

// PUBLIC_INTERFACE
export function initialBoard() {
  /** Returns a fresh 3x3 board represented as an array of 9 nulls. */
  return Array(9).fill(null);
}

// PUBLIC_INTERFACE
export function calculateWinner(squares) {
  /**
   * Returns { winner: 'X' | 'O', line: number[] } when a winner is found; otherwise null.
   */
  for (let i = 0; i < LINES.length; i += 1) {
    const [a, b, c] = LINES[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

// PUBLIC_INTERFACE
export function isDraw(squares) {
  /**
   * Returns true if all squares are filled and no winner.
   */
  if (calculateWinner(squares)) return false;
  return squares.every((sq) => sq !== null);
}
