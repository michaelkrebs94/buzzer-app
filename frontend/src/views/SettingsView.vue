<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';
import { useI18n } from 'vue-i18n';

const settings = useSettingsStore();
const { t } = useI18n();
</script>

<template>
  <main>
    <h1>{{ t('settings') }}</h1>
    <form>
      <div>
        <input
          type="checkbox"
          id="show-names"
          v-model="settings.settings.showNames"
          @change="settings.updateSettings"
        />
        <label for="show-names"> {{ t('show-names') }}</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="show-setting-icon"
          v-model="settings.settings.showSettingsIcon"
          @change="settings.updateSettings"
        />
        <label for="show-setting-icon">{{ t('show-setting-icon') }}</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="alt-keybindings"
          v-model="settings.settings.useAltKeyBindings"
          @change="settings.updateSettings"
        />
        <label for="alt-keybindings">{{ t('alt-keybindings') }}</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="return-keyup"
          v-model="settings.settings.returnOnKeyUp"
          @change="settings.updateSettings"
        />
        <label for="return-keyup">{{ t('return-keyup') }}</label>
      </div>
      <div class="participants">
        <div
          class="participant"
          v-for="participant in settings.settings.participants.entries()"
          :key="participant[0]"
        >
          <h3>{{ t('participant') }} {{ participant[0] + 1 }}</h3>
          <div>
            <label :for="'name' + participant[0]">{{ t('name') }}</label>
            <input
              :id="'name' + participant[0]"
              type="text"
              v-model="participant[1].name"
              @change="settings.updateSettings"
            />
          </div>
          <div>
            <label :for="'color' + participant[0]">{{ t('color') }}</label>
            <input
              :id="'color' + participant[0]"
              type="color"
              v-model="participant[1].color"
              @change="settings.updateSettings"
            />
          </div>
        </div>
      </div>
      <div class="add-remove">
        <button type="button" @click="settings.addParticipant">{{ t('add-participant') }}</button>
        <button type="button" @click="settings.removeParticipant">
          {{ t('remove-participant') }}
        </button>
      </div>
    </form>
  </main>
</template>

<i18n>
  {
    "en": {
      "settings": "Settings",
      "show-names": "Show participant name on result screen",
      "show-setting-icon": "Show settings icon",
      "alt-keybindings": "Use numbers 1-8 instead of F13-F20",
      "return-keyup": "Return to home screen when buzzer is released",
      "participant": "Participant",
      "name": "Name",
      "color": "Color",
      "add-participant": "Add participant",
      "remove-participant": "Remove participant"
    },
    "de": {
      "settings": "Einstellungen",
      "show-names": "Teilnehmer-Namen auf Ergebnis-Seite anzeigen",
      "show-setting-icon": "Einstellungs-Icon anzeigen",
      "alt-keybindings": "Zahlen 1-8 statt F13-F20 verwenden",
      "return-keyup": "Beim Loslassen des Buzzers zur Startseite zurückkehren",
      "participant": "Teilnehmer",
      "name": "Name",
      "color": "Farbe",
      "add-participant": "Teilnehmer hinzufügen",
      "remove-participant": "Teilnehmer entfernen"
    }
  }
</i18n>

<style scoped>
label {
  display: inline-block;
  min-width: 100px;
}

.participants {
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.participant {
  border: 5px solid var(--color-border);
  border-radius: 20px;
  padding: 10px;
  margin: 0px 10px 10px 0px;
  background-color: var(--color-background-soft);
}

input[type='color'] {
  width: 50px;
  height: 50px;
}

input[type='checkbox'] {
  margin-right: 6px;
  transform: scale(1.2);
}

input[type='text'] {
  background-color: var(--color-background-mute);
  color: var(--color-text);
  border: 1px solid var(--color-background-soft);
}

main {
  padding: 10px;
  max-width: 1080px;
  place-self: center;
}
</style>
