<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import isValidDirection from '../core/isValidDirection'
import { arrowMapping } from '../constants'

import CustomButton from './CustomButton.vue'

const props = defineProps({
  buttonDirection: {
    type: String,
    required: true
  }
})

const store = useStore()

function clickHandler() {
  store.commit('changeDirection', props.buttonDirection)
}

const disabled = computed(
  () => !isValidDirection(store.state.direction, props.buttonDirection) || store.state.directionLock
)
</script>

<template>
  <CustomButton @click="clickHandler" :disabled="disabled" round>
    {{ arrowMapping[buttonDirection] }}
  </CustomButton>
</template>

<style scoped></style>
