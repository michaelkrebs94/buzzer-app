<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';


const settings = useSettingsStore()
</script>

<template>
  <main>
    <h1>Settings</h1>
    <form>
      <div>
        <input type="checkbox" id="show-names" v-model="settings.settings.showNames" @change="settings.updateSettings" />
        <label for="show-names">Show names</label>
      </div>
      <div>
        <input type="checkbox" id="show-setting-icon" v-model="settings.settings.showSettingsIcon"
          @change="settings.updateSettings" />
        <label for="show-setting-icon">Show settings icon</label>
      </div>
      <div>
        <input type="checkbox" id="alt-keybindings" v-model="settings.settings.useAltKeyBindings"
          @change="settings.updateSettings" />
        <label for="alt-keybindings">Use alternative keyboard bindings</label>
      </div>
      <div class="participants">
        <div class="participant" v-for="participant in settings.settings.participants.entries()" :key="participant[0]">
          <h3>Participant {{ participant[0] + 1 }}</h3>
          <div>
            <label :for="'name' + participant[0]">Name</label>
            <input :id="'name' + participant[0]" type="text" v-model="participant[1].name"
              @change="settings.updateSettings" />
          </div>
          <div>
            <label :for="'color' + participant[0]">Color</label>
            <input :id="'color' + participant[0]" type="color" v-model="participant[1].color"
              @change="settings.updateSettings" />
          </div>
        </div>
      </div>
      <div class="add-remove">
        <button type="button" @click="settings.addParticipant">Add participant</button>
        <button type="button" @click="settings.removeParticipant">Remove participant</button>
      </div>
    </form>
  </main>
</template>

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

input[type="color"] {
  width: 50px;
  height: 50px;
}

input[type="checkbox"] {
  margin-right: 6px;
  transform: scale(1.2);
}

input[type="text"] {
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