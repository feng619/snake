/* ------- setting ------- */
const movingSpeed = 440
const movingSpeedMin = 300
const movingSpeedGrowth = 20

/* ------- vuex state ------- */
// gameState
const gameInit = 'gameInit'
const gamePlaying = 'gamePlaying'
const gameOver = 'gameOver'

// border
const boardWidth = 22
const boardHeight = 12

// coords
const coordsInit = ['6 10', '6 9', '6 8', '6 7', '6 6', '6 5']

const initialState = {
  gameState: gameInit,
  score: 0,
  boardWidth,
  boardHeight,
  direction: 'right',
  directionLock: false, // player can only change direction once per move
  coords: null,
  foodCoordString: null,
  interval: null,
  speed: movingSpeed
}

/* ------- layout ------- */
const gridWidth = 30

/* ------- control ------- */
const disabledDirectionMapping = {
  right: ['right', 'left'],
  left: ['right', 'left'],
  up: ['up', 'down'],
  down: ['up', 'down']
}
const arrowMapping = {
  right: '►',
  left: '◄',
  up: '▲',
  down: '▼'
}
const degMapping = {
  right: '180deg',
  left: '0deg',
  up: '90deg',
  down: '-90deg'
}

export {
  movingSpeed,
  movingSpeedMin,
  movingSpeedGrowth,
  gameInit,
  gamePlaying,
  gameOver,
  boardWidth,
  boardHeight,
  coordsInit,
  initialState,
  gridWidth,
  disabledDirectionMapping,
  arrowMapping,
  degMapping
}
