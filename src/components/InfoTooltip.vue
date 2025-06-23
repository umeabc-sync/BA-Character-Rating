<template>
  <div class="info-tooltip-wrapper">
    <slot></slot> <!-- Trigger element -->
    <div class="tooltip-content">
      {{ text }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.info-tooltip-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.tooltip-content {
  position: absolute;
  bottom: 125%; /* Position above the trigger */
  left: 50%;
  transform: translateX(-50%);
  background-color: #2c3e50;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 0.85rem;
  z-index: 100;
  width: max-content;
  max-width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  text-align: left;
  line-height: 1.5;
  pointer-events: none; /* Prevent tooltip from capturing mouse events */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
}

.info-tooltip-wrapper:hover .tooltip-content {
  opacity: 1;
  visibility: visible;
}

/* Arrow */
.tooltip-content::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #2c3e50 transparent transparent transparent;
}

/* Dark Mode */
.dark-mode .tooltip-content {
  background-color: #e0e6ed;
  color: #1a2b40;
  box-shadow: 0 4px 15px rgba(0, 174, 239, 0.2);
}

.dark-mode .tooltip-content::after {
  border-color: #e0e6ed transparent transparent transparent;
}
</style>

