import { coordsInit, initialState } from '../constants'

function getInitialState() {
  return {
    ...initialState,
    coords: [...coordsInit]
  }
}

export default getInitialState
