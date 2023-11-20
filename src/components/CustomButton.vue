<script setup>
defineProps({
  round: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  }
})
</script>

<template>
  <div class="button" :class="{ normalStyle: !disabled, disabledStyle: disabled, round }">
    <slot></slot>
  </div>
</template>

<style scoped>
.button {
  width: 100px;
  height: 50px;
  margin: 3px;
  font-size: 1.2rem;
  line-height: 50px;
  text-align: center;
  background-color: var(--button-color);
  border-radius: var(--main-border-radius);
  cursor: pointer;
}

.normalStyle:hover {
  background-color: var(--button-color-hover);
}

.disabledStyle {
  color: #aaa;
}

.round {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
