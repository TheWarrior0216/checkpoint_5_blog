<script setup>
import { AppState } from './AppState'


</script>

<template>
  <header>

  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-dark text-light">
    Made with 💜 by Seth @ CodeWorks
  </footer>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
