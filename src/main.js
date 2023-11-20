import { createApp } from 'vue'
import { createStore } from 'vuex'

import move from './core/move'
import isGameOver from './core/isGameOver'
import getFoodCoordString from './core/getFoodCoordString'
import getNextCoordString from './core/getNextCoordString'
import isValidDirection from './core/isValidDirection'
import playSound from './sound/playSound'
import getInitialState from './utils/getInitialState'
import {
  movingSpeedMin,
  movingSpeedGrowth,
  gamePlaying,
  gameOver,
  boardWidth,
  boardHeight
} from './constants'
import App from './App.vue'

import './assets/main.css'

const store = createStore({
  state() {
    return getInitialState()
  },
  getters: {
    snakeCoordObject(state) {
      return state.coords.reduce((object, coordString) => {
        object[coordString] = true

        return object
      }, {})
    }
  },
  mutations: {
    changeDirection(state, newDirection) {
      const { direction, directionLock } = state

      if (!isValidDirection(direction, newDirection) || directionLock) return

      playSound('direction')

      state.direction = newDirection
      state.directionLock = true
    },
    updateFoodCoordString(state) {
      state.foodCoordString = getFoodCoordString(boardWidth, boardHeight, state.coords)
    },
    clearState(state) {
      Object.assign(state, getInitialState())
    }
  },
  actions: {
    startMove({ state, commit, dispatch }) {
      playSound('click')
      commit('updateFoodCoordString')

      state.gameState = gamePlaying
      state.interval = window.setInterval(() => {
        dispatch('moveHandler')
      }, state.speed)
    },
    moveHandler({ state, commit, dispatch }) {
      if (state.directionLock) state.directionLock = false

      if (isGameOver(boardWidth, boardHeight, state.direction, state.coords)) {
        dispatch('stopMove')

        state.gameState = gameOver
      } else {
        const { direction, coords, foodCoordString } = state
        const wasEaten = getNextCoordString(direction, coords) === foodCoordString

        if (wasEaten) {
          playSound('eat')
          commit('updateFoodCoordString')

          state.score += 1

          if (state.speed > movingSpeedMin) dispatch('updateInterval')
        }

        state.coords = move(direction, coords, wasEaten)
      }
    },
    stopMove({ state }) {
      playSound('hit')

      window.clearInterval(state.interval)
      state.interval = null
    },
    updateInterval({ state, dispatch }) {
      state.speed -= movingSpeedGrowth

      window.clearInterval(state.interval)

      state.interval = window.setInterval(() => {
        dispatch('moveHandler')
      }, state.speed)
    }
  }
})

const app = createApp(App)

app.use(store)
app.mount('#app')
