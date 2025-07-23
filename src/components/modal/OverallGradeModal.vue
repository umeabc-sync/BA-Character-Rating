<template>
  <teleport to="body">
    <Transition name="modal-fade">
      <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <div class="modal-header">
            <div class="header-title">
              <h2>{{ t('overallGradeModal.title') }}</h2>
            </div>
            <button class="close-button" @click="closeModal">×</button>
          </div>

          <div class="modal-body">
            <div class="modal-body-content">
              <div class="criteria-section">
                <p>{{ t('overallGradeModal.description') }}</p>
                <ul>
                  <li><strong>≥80 (SS~A):</strong> {{ t('overallGradeModal.ss_a') }}</li>
                  <li><strong>70~79(B):</strong> {{ t('overallGradeModal.b') }}</li>
                  <li><strong>60~69(C):</strong> {{ t('overallGradeModal.c') }}</li>
                  <li><strong>40~59(D~E):</strong> {{ t('overallGradeModal.d_e') }}</li>
                  <li><strong>20~39(F):</strong> {{ t('overallGradeModal.f') }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<script setup>
  import { toRefs } from 'vue'
  import { useI18n } from '@/composables/useI18n'
  import { useModal } from '@/composables/useModal'

  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false,
    },
  })

  const emit = defineEmits(['close'])

  const { t } = useI18n()

  const closeModal = () => {
    emit('close')
  }

  const { isVisible } = toRefs(props)
  useModal(isVisible, closeModal)
</script>

<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    backdrop-filter: blur(5px);
  }

  .modal-content {
    background: #fff;
    padding: 25px 0 0;
    border-radius: 10px;
    width: 90%;
    max-width: 700px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    border-top: 5px solid #6495ed;
    animation: slide-down 0.3s ease-out;
    overflow: hidden;
  }

  @keyframes slide-down {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .dark-mode .modal-content {
    background: linear-gradient(145deg, #1f3048, #2a4060);
    border-color: #00aeef;
    color: #ecf0f1;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px 15px;
    position: relative;
  }

  .modal-header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 25px;
    right: 25px;
    height: 1px;
    background-color: #eee;
  }

  .header-title h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  .dark-mode .modal-header::after {
    background-color: #4f6a8e;
  }

  .close-button {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #aaa;
    line-height: 1;
    transition: color 0.2s;
  }

  .dark-mode .close-button {
    color: #7f8c8d;
  }

  .close-button:hover {
    color: #333;
  }

  .dark-mode .close-button:hover {
    color: #e0e6ed;
  }

  .modal-body {
    overflow-y: auto;
    font-size: 1rem;
    mask-image: linear-gradient(to bottom, transparent, black 15px);
    scrollbar-width: thin;
    scrollbar-color: #bdc3c7 #fff;
  }

  .dark-mode .modal-body {
    scrollbar-color: #7f8c8d #1f3048;
  }

  .modal-body::-webkit-scrollbar {
    width: 12px;
  }

  .modal-body::-webkit-scrollbar-track {
    background: transparent;
  }

  .modal-body::-webkit-scrollbar-thumb {
    background-color: #bdc3c7;
    border-radius: 10px;
    border: 3px solid #fff;
  }

  .dark-mode .modal-body::-webkit-scrollbar-thumb {
    background-color: #7f8c8d;
    border-color: #1f3048;
  }

  .modal-body::-webkit-scrollbar-thumb:hover {
    background-color: #a9a9a9;
  }

  .dark-mode .modal-body::-webkit-scrollbar-thumb:hover {
    background-color: #95a5a6;
  }

  .modal-body-content {
    padding: 15px 25px 0;
  }

  .criteria-section {
    margin-bottom: 25px;
  }

  .criteria-section p {
    margin-bottom: 1em;
  }

  .criteria-section ul {
    list-style-type: none;
    padding: 0;
  }

  .criteria-section li {
    margin-bottom: 0.5em;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .modal-fade-enter-from,
  .modal-fade-leave-to {
    opacity: 0;
  }

  @media (max-width: 768px) {
    .modal-content {
      width: 95%;
      max-height: 90vh;
    }

    .header-title h2 {
      font-size: 1.5rem;
    }
  }
</style>
