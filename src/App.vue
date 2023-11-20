<script setup>
import TheBoard from './components/TheBoard.vue'
import ThePanel from './components/ThePanel.vue'
</script>

<template>
  <header></header>

  <main>
    <div id="container">
      <div>
        <TheBoard />
        <ThePanel />
      </div>
    </div>
  </main>
</template>

<style scoped>
#container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--app-background-color);
}
</style>
