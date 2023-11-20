<script setup>
import coordStringToArray from '../utils/coordStringToArray'
import { gridWidth } from '../constants'

const props = defineProps({
  foodCoordString: {
    type: String,
    required: true
  }
})

const [y, x] = coordStringToArray(props.foodCoordString)
</script>

<template>
  <div id="foodDot" />
</template>

<style scoped>
#foodDot {
  width: v-bind(gridWidth + 'px');
  height: v-bind(gridWidth + 'px');
  position: absolute;
  top: v-bind(gridWidth * y + 'px');
  left: v-bind(gridWidth * x + 'px');
  border-radius: 50%;
  background-color: var(--food-color);
}
</style>
