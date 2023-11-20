<script setup>
import { computed } from 'vue'

import { gridWidth } from '../constants'

const props = defineProps({
  y: {
    type: Number,
    required: true
  },
  x: {
    type: Number,
    required: true
  }
})

const darken = computed(() => ((props.x + props.y) % 2 === 0 ? 'grid2' : ''))
</script>

<template>
  <div class="grid" :class="darken" />
</template>

<style scoped>
.grid {
  width: v-bind(gridWidth + 'px');
  height: v-bind(gridWidth + 'px');
  position: relative;
  box-sizing: border-box;
  background-color: var(--grid-color-darken10);
}

.grid2 {
  background-color: var(--grid-color-darken20);
}
</style>
