<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div v-if="isVisible" class="modal-overlay" @click.self="$emit('close')">
        <div class="modal-content">
          <div class="modal-header">
            <h3>設定</h3>
            <button @click="$emit('close')" class="close-button">&times;</button>
          </div>
          <div class="modal-body">
            <div class="setting-group">
              <h4 class="setting-group-title">語言</h4>
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
            <!-- More settings added here -->
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { useSettingStore } from '@/store/setting';
import { storeToRefs } from 'pinia';

defineProps({
  isVisible: { type: Boolean, default: false }
});
defineEmits(['close']);

const settingStore = useSettingStore();
const { locale: currentLocale } = storeToRefs(settingStore);

const availableLanguages = [
  { code: 'zh-tw', name: '繁體中文' },
  { code: 'zh-cn', name: '简体中文' },
];

// 暫時性設定
const handleLocaleChange = (newLocale) => {
  // 如果選擇的語言與當前語言相同，則不執行任何操作
  if (currentLocale.value === newLocale) {
    return;
  }
  settingStore.setLocale(newLocale);
  // 强制重新整理頁面以應用所有語言變更
  window.location.reload();
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
</style>
