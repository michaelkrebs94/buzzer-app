<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';
import 'primeicons/primeicons.css';
import { computed } from 'vue';

function openOrCloseSettings() {
    if (window.location.href.includes('/settings')) {
        window.location.href = '/';
        return;
    }
    window.location.href = '/settings';
}

const showIcon = computed(() => useSettingsStore().settings.showSettingsIcon);

</script>

<template>
    <div class="container" @click="openOrCloseSettings">
        <i class="icon pi pi-cog"></i>
    </div>
</template>

<style>
.icon {
    color: var(--color-text);
    font-size: 20px;
    visibility: v-bind("showIcon ? 'visible' : 'hidden'");
}

.container {
    position: absolute;
    bottom: 20px;
    right: 20px;
    min-width: 100px;
    min-height: 100px;
    display: flex;
    justify-content: end;
    align-items: end;
}
</style>
