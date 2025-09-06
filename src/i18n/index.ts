import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import it from './it.json';
import en from './en.json';
import fr from './fr.json';
import sp from './sp.json';
import ch from './ch.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      it: { translation: it },
      en: { translation: en },
      fr: { translation: fr },
      sp: { translation: sp },
      ch: { translation: ch }
    },
    lng: 'en',           // lingua di default
    fallbackLng: 'en',   // se la lingua selezionata non è disponibile
    interpolation: { escapeValue: false }
  });

export default i18n;
