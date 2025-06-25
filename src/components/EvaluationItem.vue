<template>
  <div class="eval-item" :class="color" :data-item="dataItem" @click="handleClick($event)">
    <div class="eval-header">{{ header }}</div>
    <div class="eval-value">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  header: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  dataItem: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['item-click']);

function handleClick(event) {
  emit('item-click', props.dataItem, event);
}
</script>

<style scoped>
.eval-item {
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.7);
  border-top: 4px solid; /* Change the color of the top border */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.eval-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Dark Mode Overrides for EvaluationGrid */
.dark-mode .eval-item {
  background: #1f3048;
  color: #e0e6ed;
}

.eval-header {
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: #555;
}

.dark-mode .eval-header {
  color: #c0c8d0;
}

.eval-value {
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30px; /* Give some height for images to load into */
  color: #2c3e50;
}

.dark-mode .eval-value {
  color: #e0e6ed; /* Light text for value */
}

.yellow { border-color: #ffd166; }
.green { border-color: #06d6a0; }
.blue { border-color: #118ab2; }
.gray { border-color: #95a5a6; }
.purple { border-color: #8e44ad; }
.peach { border-color: #ef476f; }
.pink { border-color: #ff89a1; }
.darkgray { border-color: #6e7d8d; }

@media (max-width: 768px) {
  .eval-item {
    padding: 8px 4px;
    font-size: 0.8rem;
  }
}
</style>