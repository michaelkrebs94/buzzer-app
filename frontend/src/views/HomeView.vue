<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';


const keyBindings = useSettingsStore().getKeyBindings();

const keyDownHandler = (event: KeyboardEvent) => {
  const keyIndex = keyBindings.indexOf(event.key);
  if (keyIndex !== -1) {
    window.removeEventListener('keydown', keyDownHandler);
    window.location.href = `/result/${keyIndex}`;
  }
};

window.addEventListener('keydown', keyDownHandler);


</script>

<template>
  <main>
    <h1>Waiting..</h1>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
