<script setup>
import coordStringToArray from '../utils/coordStringToArray'
import { gridWidth } from '../constants'

const props = defineProps({
  coordString: {
    type: String,
    required: true
  }
})

const [y, x] = coordStringToArray(props.coordString)
</script>

<template>
  <div class="snakeDot" />
</template>

<style scoped>
.snakeDot {
  width: v-bind(gridWidth + 'px');
  height: v-bind(gridWidth + 'px');
  position: absolute;
  top: v-bind(gridWidth * y + 'px');
  left: v-bind(gridWidth * x + 'px');
  border-radius: 35%;
  background-color: var(--snake-color);
}
</style>
