# Tic Tac Toe – Retro React

A lightweight two-player Tic Tac Toe web app with a retro-styled UI, scoreboard, winning-line highlight, and controls for new rounds and full reset.

## Features
- Playable 3x3 board with click interactions and turn indicator
- Detects wins and draws; prevents further moves after game over
- Highlights the winning line
- Scoreboard tracking X wins, O wins, and draws across rounds
- Controls:
  - New Round (keeps scores)
  - Reset All (clears board and scores)
- Retro theme with pixel-style fallback fonts and subtle CRT overlay
- Responsive layout, centered board, accent colors: `#3b82f6` and `#06b6d4`
- No backend or external APIs

## Run locally
```bash
npm install
npm start
```
Open http://localhost:3000 to view it in your browser.

## Project Structure
- src/App.js – App state and composition
- src/components/Board.jsx – Board grid and square rendering
- src/components/Square.jsx – Individual square
- src/components/Scoreboard.jsx – Scores and status line
- src/components/Controls.jsx – New Round / Reset All buttons
- src/utils/gameUtils.js – Winner, draw, and initial board helpers
- src/index.css, src/App.css – Retro theme styles

## Notes
- Built with React and vanilla CSS; no external services or environment variables required.
- Designed to run on port 3000 via CRA.
