<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div v-if="isVisible" class="modal-overlay" @click.self="close">
        <div class="modal-content">
          <div class="modal-header">
            <h3>{{ t('common.settings') }}</h3>
            <button @click="close" class="close-button">&times;</button>
          </div>
          <div class="modal-body">
            <div class="setting-group">
              <h4 class="setting-group-title">{{ t('settingsModal.language') }}</h4>
              <div class="language-selector">
                <button
                  v-for="lang in availableLanguages"
                  :key="lang.code"
                  :class="{ active: currentLocale === lang.code }"
                  @click="handleLocaleChange(lang.code)"
                >
                  {{ lang.name }}
                </button>
              </div>
            </div>

            <div class="setting-group">
              <h4 class="setting-group-title">{{ t('settingsModal.enableColoredText') }}</h4>
              <div class="toggle-switch">
                <input type="checkbox" id="coloredTextToggle" :checked="isColoredTextEnabled" @change="toggleColoredText" />
                <label for="coloredTextToggle"></label>
                <span class="toggle-label">{{ isColoredTextEnabled ? t('common.enabled') : t('common.disabled') }}</span>
              </div>

            </div>
            <!-- More settings added here -->
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { toRefs } from 'vue';
import { useSettingStore } from '@/store/setting';
import { storeToRefs } from 'pinia';
import { useI18n } from '@/composables/useI18n.js';
import { useEscapeKey } from '@/composables/useEscapeKey.js';

const { t } = useI18n();

const props = defineProps({
  isVisible: { type: Boolean, default: false }
});
const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
const { isVisible } = toRefs(props);
useEscapeKey(isVisible, close);

const settingStore = useSettingStore();
const { locale: currentLocale, enableColoredText: isColoredTextEnabled } = storeToRefs(settingStore);

const availableLanguages = [
  { code: 'zh-tw', name: '繁體中文' },
  { code: 'zh-cn', name: '简体中文' },
];

const handleLocaleChange = (newLocale) => {
  // If the selected language is the same as the current language, no action is performed
  if (currentLocale.value === newLocale) {
    return;
  }
  settingStore.setLocale(newLocale);
  // Force refresh the page to apply all language changes
  window.location.reload();
};

const toggleColoredText = () => {
  settingStore.toggleColoredText();
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: #f8f9fa;
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 25px rgba(0,0,0,0.4);
  animation: slide-down 0.3s ease-out;
}

@keyframes slide-down {
  from { transform: translateY(-30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.dark-mode .modal-content {
  background: #1a2b40;
  color: #e0e6ed;
}

.modal-header {
  padding: 15px 20px;
  border-bottom: 1px solid #dee2e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(45deg, #87CEEB, #6495ED);
  color: white;
  border-radius: 15px 15px 0 0;
}

.dark-mode .modal-header {
  background: linear-gradient(45deg, #2a7fff, #00aeef);
  border-bottom-color: #2a4a6e;
}

.close-button {
  background: none; border: none; font-size: 2rem; color: white;
  cursor: pointer; line-height: 1; opacity: 0.8; transition: opacity 0.2s;
}
.close-button:hover { opacity: 1; }

.modal-body {
  padding: 20px;
  overflow-y: auto;
}

.setting-group {
  margin-bottom: 20px;
}

.setting-group-title {
  font-size: 1.1rem;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
}

.dark-mode .setting-group-title {
  border-bottom-color: #2a4a6e;
}

.language-selector {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.language-selector button {
  padding: 12px 20px; border: 1px solid #bdc3c7; border-radius: 8px;
  background-color: #fff; cursor: pointer; transition: all 0.3s ease;
  font-size: 1rem; text-align: left; font-weight: 500;
}

.dark-mode .language-selector button { background-color: #1f3048; border-color: #2a4a6e; color: #e0e6ed; }
.language-selector button:hover { border-color: #6495ed; background-color: #e9ecef; }
.dark-mode .language-selector button:hover { border-color: #00aeef; background-color: #2a4a6e; }
.language-selector button.active { background-color: #6495ed; color: white; border-color: #6495ed; font-weight: bold; box-shadow: 0 0 10px rgba(100, 149, 237, 0.5); }
.dark-mode .language-selector button.active { background-color: #00aeef; border-color: #00aeef; box-shadow: 0 0 10px rgba(0, 174, 239, 0.5); }

.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.3s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }

/* Toggle Switch Styles */
.toggle-switch {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.toggle-switch input[type="checkbox"] {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-switch label {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 28px;
  background-color: #ccc;
  border-radius: 28px; /* Half of height for pill shape */
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle-switch label:before {
  content: '';
  position: absolute;
  width: 20px; /* Smaller circle */
  height: 20px; /* Smaller circle */
  border-radius: 50%;
  background-color: white;
  top: 4px; /* Center vertically */
  left: 4px; /* Initial position */
  transition: transform 0.3s;
}

input[type="checkbox"]:checked + label {
  background-color: #6495ed;
}

.dark-mode input[type="checkbox"]:checked + label {
  background-color: #00aeef;
}

input[type="checkbox"]:checked + label:before {
  transform: translateX(20px); /* Move to the right (width - circle_width - padding*2) */
}

.toggle-label {
  font-weight: 500;
  user-select: none;
}
</style>
