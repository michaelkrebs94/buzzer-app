<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';
import { useRoute } from 'vue-router';
import tinycolor from 'tinycolor2';


// determine the backgroud color for the given participant id
const route = useRoute()
const participantId: number = Number.parseInt(route.params.id);
const participant = useSettingsStore().settings.participants[participantId];
const showName = useSettingsStore().settings.showNames;
const backgroundColor = participant ? participant.color : '#000';

// use black or white text color depending on the background color brightness
const textColor = tinycolor(backgroundColor).isLight() ? '#000' : '#fff';

// redirect to home when screen is touched or clicked
window.addEventListener('click', () => {
    window.location.href = '/';
});

</script>

<template>
    <main>
        <h1>
            {{ showName ? participant.name : '' }}
        </h1>
    </main>
</template>

<style scoped>
main {
    background-color: v-bind("backgroundColor");
    color: v-bind("textColor");
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: min(20vw, 100px);
    font-weight: 900;
    text-transform: uppercase;
}
</style>