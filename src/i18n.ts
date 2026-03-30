import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import kh from './locales/kh.json';
import ch from './locales/zh.json'; // using the existing file but naming it ch

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'kh', // set default locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    en,
    kh,
    ch
  }
});

export default i18n;
