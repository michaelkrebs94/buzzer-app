<script setup lang="ts">
import { RouterView } from 'vue-router'
import SettingsIcon from '@/components/SettingsIcon.vue'

import { useSound } from '@vueuse/sound';
import sfx from "./assets/sound/buzzer.wav"

const { play } = useSound(sfx, { volume: 1, interrupt: false });
</script>

<template>
  <SettingsIcon />
  <RouterView @buzzer-pressed="play" />
</template>

