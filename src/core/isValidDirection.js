import { disabledDirectionMapping } from '../constants'

function isValidDirection(direction, nextDirection) {
  const disabledDirection = disabledDirectionMapping[direction]

  return !disabledDirection.includes(nextDirection)
}

export default isValidDirection
