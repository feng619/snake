import coordStringToArray from '../utils/coordStringToArray'

function getNextCoordString(direction, coords) {
  const [y, x] = coordStringToArray(coords[0])
  let nextMoveCoord

  switch (direction) {
    case 'up':
      nextMoveCoord = `${y - 1} ${x}`
      break
    case 'down':
      nextMoveCoord = `${y + 1} ${x}`
      break
    case 'right':
      nextMoveCoord = `${y} ${x + 1}`
      break
    case 'left':
      nextMoveCoord = `${y} ${x - 1}`
      break
    default:
      console.error('error in getNextCoordString')
  }

  return nextMoveCoord
}

export default getNextCoordString
