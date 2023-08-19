import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as srData from "./locales/sr/translations.json";
import * as enData from "./locales/en/translations.json";

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
  type: "languageDetector",
  async: true, // flags below detection to be async
  detect: async (callback) => {
    const locale = await AsyncStorage.getItem("lang");
    if (locale) {
      callback(locale);
      return locale;
    }
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    fallbackLng: "en",
    react: { useSuspense: false },
    supportedLngs: ["sr", "en"],
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    debug: false,

    cache: {
      enabled: true,
    },

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  });

i18n
  .addResources("sr", "translations", srData)
  .addResources("en", "translations", enData);

export default i18n;
