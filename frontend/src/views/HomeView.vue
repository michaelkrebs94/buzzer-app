<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';
import { useI18n } from 'vue-i18n';

const keyBindings = useSettingsStore().getKeyBindings();
const emit = defineEmits(['buzzer-pressed']);

const keyDownHandler = (event: KeyboardEvent) => {
  const keyIndex = keyBindings.indexOf(event.key);
  if (keyIndex !== -1) {
    window.removeEventListener('keydown', keyDownHandler);
    window.location.href = `/result/${keyIndex}`;
    emit('buzzer-pressed');
  }
};

window.addEventListener('keydown', keyDownHandler);

const { t } = useI18n();

</script>

<template>
  <main>
    <h1>{{ t('waiting') }}</h1>
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

<i18n>
  {
    "en": {
      "waiting": "press buzzer.."
    },
    "de": {
      "waiting": "Buzzer drücken.."
    }
  }
</i18n>
