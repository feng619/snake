<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import coordStringToArray from '../utils/coordStringToArray'
import { gridWidth, degMapping } from '../constants'

const props = defineProps({
  coordString: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
const [y, x] = coordStringToArray(props.coordString)

const store = useStore()
const deg = computed(() => degMapping[store.state.direction])
</script>

<template>
  <div class="snakeDot">
    <div id="eyes" v-if="index === 0">:</div>
  </div>
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

#eyes {
  width: 100%;
  height: 100%;
  line-height: 80%;
  font-size: 2rem;
  color: var(--snake-eyes-color);
  transform: rotate(v-bind(deg));
}
</style>
