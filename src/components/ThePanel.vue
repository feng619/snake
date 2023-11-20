<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

import { gameInit, gamePlaying } from '../constants'

import ControlButton from './ControlButton.vue'
import CustomButton from './CustomButton.vue'

const store = useStore()

function startMove() {
  store.dispatch('startMove')
}

function restart() {
  store.commit('clearState')
  store.dispatch('startMove')
}

onMounted(() => {
  addEventListener('keyup', (e) => {
    if (!e.key.includes('Arrow')) return

    const newDirection = e.key.replace('Arrow', '').toLowerCase()

    store.commit('changeDirection', newDirection)
  })
})
</script>

<template>
  <div id="panel">
    <div id="control">
      <CustomButton v-if="store.state.gameState === gameInit" @click="startMove">
        play
      </CustomButton>
      <p v-else-if="store.state.gameState === gamePlaying">playing</p>
      <CustomButton v-else @click="restart"> play again </CustomButton>
    </div>

    <div id="score">
      <p>{{ store.state.score }}</p>
    </div>

    <div>
      <div id="buttons-upper">
        <ControlButton :buttonDirection="'up'" />
      </div>
      <div id="buttons-lower">
        <ControlButton :buttonDirection="'left'" />
        <ControlButton :buttonDirection="'down'" />
        <ControlButton :buttonDirection="'right'" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#panel {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--panel-color);
  border-radius: var(--main-border-radius);
  margin-top: 10px;
  padding: 10px;
}

#control {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
}

#control > p {
  width: 106px;
  cursor: default;
}

#score {
  font-size: 2rem;
}

#score > p {
  cursor: default;
}

#buttons-upper {
  display: flex;
  justify-content: center;
}

#buttons-lower {
  display: flex;
}
</style>
