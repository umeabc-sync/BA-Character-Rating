<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div v-if="modelValue" class="modal-backdrop" @click.self="closeModal">
        <div class="modal-content" :style="modalStyle">
          <button class="close-button" @click="closeModal">&times;</button>
          <h3 class="modal-title">{{ title }}</h3>
          <div class="modal-body">
            <img v-if="imageUrl" :src="imageUrl" alt="Detail Image" class="modal-image">
            <p v-if="text" class="modal-text">{{ text }}</p>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  title: String,
  imageUrl: String,
  text: String,
  position: {
    type: Object,
    default: () => ({ top: 0, left: 0 })
  }
});

const emit = defineEmits(['update:modelValue']);

const modalStyle = computed(() => {
  // Default to center if no position is provided
  if (!props.position || (props.position.top === 0 && props.position.left === 0)) {
    return {
      top: '50%',
      left: '50%',
      '--modal-transform': 'translate(-50%, -50%)'
    };
  }
  // Position below the clicked item
  return {
    top: `${props.position.top + 10}px`, // Add 10px margin
    left: `${props.position.left}px`,
    '--modal-transform': 'translateX(-50%)'
  };
});

function closeModal() {
  emit('update:modelValue', false);
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: white;
  padding: 20px 30px;
  border-radius: 10px;
  min-width: 250px;
  max-width: 90vw;
  position: absolute;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-top: 5px solid #118ab2; /* A default color matching the equipment items */
  transform: var(--modal-transform);
  animation: slide-down 0.3s ease-out;
}

@keyframes slide-down {
  from {
    transform: var(--modal-transform) translateY(-20px);
    opacity: 0;
  }
  to {
    transform: var(--modal-transform) translateY(0);
    opacity: 1;
  }
}

.dark-mode .modal-content {
  background: #2c3e50;
  color: #e0e6ed;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #888;
  line-height: 1;
  transition: color 0.2s;
}

.dark-mode .close-button {
  color: #bbb;
}

.close-button:hover {
  color: #333;
}

.modal-title {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.modal-image {
  max-width: 100px;
  max-height: 100px;
  object-fit: contain;
  margin-bottom: 15px;
}

.modal-text {
  font-size: 1.2rem;
  margin: 0;
}

/* Transition for the backdrop */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>