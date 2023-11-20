import getNextCoordString from './getNextCoordString'

function move(direction, coords, wasEaten) {
  const newCoords = [...coords]

  if (!wasEaten) newCoords.pop()

  newCoords.unshift(getNextCoordString(direction, newCoords))

  return newCoords
}

export default move
