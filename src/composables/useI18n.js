import { ref } from 'vue';
import zhTW from '../locales/zh-tw.json';

// Currently we only have one language (zh-TW).
// In the future this could be expanded to allow for dynamic language loading and switching.
const translations = ref(zhTW);

/**
* A simple Composable for internationalization (i18n).
*/
export function useI18n() {
  /**
   * Translate the given key.
   * @param {string} key - The key to translate, for example 'attackType.Explosive'.
   * @returns {string} The translated string, or the original key if not found.
   */
  const t = (key) => {
    if (!key) return '';
    return key.split('.').reduce((o, i) => o?.[i], translations.value) || key;
  };

  return { t };
}
