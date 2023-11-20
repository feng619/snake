import getRandomNumber from '../utils/getRandomNumber'

function getRandomCoordString(width, height) {
  return `${getRandomNumber(height)} ${getRandomNumber(width)}`
}

function getFoodCoordString(boardWidth, boardHeight, coords) {
  let newCoordString

  do {
    newCoordString = getRandomCoordString(boardWidth, boardHeight)
  } while (coords.includes(newCoordString))

  return newCoordString
}

export default getFoodCoordString
