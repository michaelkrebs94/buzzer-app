import { ref } from 'vue'
import { defineStore } from 'pinia'

const COLORS = ['#0000ff', '#ff0000', '#00ff00', '#ffff00', '#00ffff', '#ff00ff', '#ffffff', '#000000', '#800000', '#008000', '#000080', '#808000', '#800080', '#008080', '#808080', '#c0c0c0', '#808040', '#004040', '#8080ff', '#ff8080', '#ffff80']

const keyBindings = ['F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20'];
const altKeyBindings = ['1', '2', '3', '4', '5', '6', '7', '8'];

export class Participant {
  name: string = ''
  color: string

  constructor(number: number) {
    this.color = COLORS[number]
  }
}

export type AppSettings = {
  participants: Participant[]
  showNames: boolean
  showSettingsIcon: boolean
  useAltKeyBindings: boolean
  returnOnKeyUp: boolean
}

function getDefaultSettings(): AppSettings {
  return {
    participants: [new Participant(0)],
    showNames: true,
    showSettingsIcon: true,
    useAltKeyBindings: true,
    returnOnKeyUp: false
  }
}

function getSettings(): AppSettings {
  const settings = localStorage.getItem('settings')
  if (settings) {
    return JSON.parse(settings)
  }
  return getDefaultSettings();
}

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref(getSettings());

  function updateSettings() {
    localStorage.setItem('settings', JSON.stringify(settings.value))
  }

  function addParticipant() {
    if (settings.value.participants.length >= getKeyBindings().length) return
    settings.value.participants.push(new Participant(settings.value.participants.length))
    updateSettings()
  }

  function removeParticipant() {
    settings.value.participants.pop()
    updateSettings()
  }

  function getKeyBindings() {
    return settings.value.useAltKeyBindings ? altKeyBindings : keyBindings;
  }

  return { settings, addParticipant, removeParticipant, updateSettings, getKeyBindings }
})
