<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <button @click="toggleDarkMode" class="dark-mode-toggle">
      {{ isDarkMode ? '切換至明亮模式' : '切換至暗黑模式' }}
    </button>
    <RatingCard />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RatingCard from './components/RatingCard.vue';

const isDarkMode = ref(false); // Light mode preset

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle('dark-mode', isDarkMode.value); // 將 class 應用到 body
};
</script>

<style>
/* Global Style */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  background: linear-gradient(135deg, #e0ffff 0%, #add8e6 100%);
  color: #2c3e50; /* Light mode default text color */
  min-height: 100vh;
  padding: 10px;
  transition: background 0.3s ease, color 0.3s ease; /* Smooth transition */
}

/* Dark Mode Styles for Body */
body.dark-mode {
  background: linear-gradient(135deg, #1c2a3a 0%, #283747 100%);
  color: #e0e6ed;
}

.dark-mode-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 15px;
  background: linear-gradient(45deg, #6495ed, #4a90e2);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: background 0.3s ease, transform 0.2s ease;
}

.dark-mode-toggle:hover {
  background: linear-gradient(45deg, #4a90e2, #6495ed);
  transform: translateY(-2px);
}

</style>
