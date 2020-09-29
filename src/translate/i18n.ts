import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { messages } from './languages';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
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
    react: {
      wait: true,
      useSuspense: true,
    },
  });

export { i18n };
