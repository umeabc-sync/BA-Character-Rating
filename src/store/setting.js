import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useSettingStore = defineStore(
  'setting',
  () => {
    // State
    const theme = ref('system') // 'light', 'dark', 'system'
    const osPrefersDark = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)
    const locale = ref(null)
    const enableColoredText = ref(true)
    const tutorialShown = ref(false)
    const enableCharacterSelectorLazyLoad = ref(true)
    const showJpname = ref(false)

    // Getters (Computed)
    const isDarkMode = computed(() => {
      if (theme.value === 'dark') return true
      if (theme.value === 'light') return false
      return osPrefersDark.value // 'system'
    })

    // Actions
    function toggleTheme() {
      const themes = ['light', 'dark', 'system']
      const currentIndex = themes.indexOf(theme.value)
      const nextIndex = (currentIndex + 1) % themes.length
      theme.value = themes[nextIndex]
    }

    function toggleColoredText() {
      enableColoredText.value = !enableColoredText.value
    }

    function toggleCharacterSelectorLazyLoad() {
      enableCharacterSelectorLazyLoad.value = !enableCharacterSelectorLazyLoad.value
    }

    function toggleShowJpname() {
      showJpname.value = !showJpname.value
    }

    function setLocale(newLocale) {
      locale.value = newLocale
    }

    function markTutorialAsShown() {
      tutorialShown.value = true
    }

    function initThemeListener() {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        osPrefersDark.value = e.matches
      })
    }

    return {
      theme,
      locale,
      isDarkMode,
      enableColoredText,
      tutorialShown,
      enableCharacterSelectorLazyLoad,
      showJpname,
      toggleTheme,
      toggleColoredText,
      toggleCharacterSelectorLazyLoad,
      toggleShowJpname,
      setLocale,
      markTutorialAsShown,
      initThemeListener,
    }
  },
  { persist: true }
)
