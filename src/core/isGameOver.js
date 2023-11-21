import coordStringToArray from '../utils/coordStringToArray'

import getNextCoordString from './getNextCoordString'

function isGameOver(boardWidth, boardHeight, direction, coords) {
  const nextCoord = getNextCoordString(direction, coords)
  const [y, x] = coordStringToArray(nextCoord)
  const newCoords = [...coords]

  newCoords.pop() // prevent collision with its own tail

  return y < 0 || y === boardHeight || x < 0 || x === boardWidth || newCoords.includes(nextCoord)
}

export default isGameOver
