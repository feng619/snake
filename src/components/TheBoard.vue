<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { boardWidth, gridWidth } from '../constants'

import TheGrid from './TheGrid.vue'
import SnakeDot from './SnakeDot.vue'
import FoodDot from './FoodDot.vue'

const store = useStore()

const hasFood = computed(() => typeof store.state.foodCoordString === 'string')
</script>

<template>
  <div id="board">
    <template v-for="index1 in store.state.boardHeight" :key="index1">
      <template v-for="index2 in store.state.boardWidth" :key="index2">
        <TheGrid :y="index1 - 1" :x="index2 - 1" />
      </template>
    </template>

    <template v-for="(coord, i) in store.state.coords" :key="coord + i">
      <SnakeDot :coordString="coord" />
    </template>

    <FoodDot
      v-if="hasFood"
      :foodCoordString="store.state.foodCoordString"
      :key="store.state.foodCoordString"
    />
  </div>
</template>

<style scoped>
#board {
  width: v-bind(gridWidth * boardWidth + 'px');
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: var(--main-border-radius);
  overflow: hidden;
}
</style>
