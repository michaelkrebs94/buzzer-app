import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n, useI18n } from 'vue-i18n';

import App from './App.vue';
import router from './router';

const i18n = createI18n({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'en'
});

const app = createApp(App, {
  setup() {
    const { t } = useI18n(); // call `useI18n`, and spread `t` from  `useI18n` returning
    return { t }; // return render context that included `t`
  }
});
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(i18n);

app.mount('#app');
