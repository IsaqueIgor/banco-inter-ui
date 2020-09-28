import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { messages } from './languages';

i18n.use(LanguageDetector).init({
  debug: false,
  fallbackLng: 'pt',
  resources: messages,
  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
    format(value, format) {
      if (format === 'uppercase') return value.toUpperCase();
      return value;
    },
  },
});

export { i18n };
