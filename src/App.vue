<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <RatingCard 
      v-if="currentCharacter"
      :character="currentCharacter" 
      @open-selector="isSelectorVisible = true" 
      :is-dark-mode="isDarkMode"
      @toggle-dark-mode="toggleDarkMode"
    />
    <CharacterSelector 
      v-if="isSelectorVisible" 
      :characters="allCharacters" 
      @select="handleCharacterSelect" 
      @close="isSelectorVisible = false" 
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import RatingCard from './components/RatingCard.vue';
import CharacterSelector from './components/CharacterSelector.vue';
import characterData from './data/zh-tw.json';

const isDarkMode = ref(false);
const allCharacters = ref(characterData);
const currentCharacter = ref(allCharacters.value.length > 0 ? allCharacters.value[0] : null);
const isSelectorVisible = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle('dark-mode', isDarkMode.value); // 將 class 應用到 body
};

const handleCharacterSelect = (characterId) => {
  const selected = allCharacters.value.find(c => c.id === characterId);
  if (selected) {
    currentCharacter.value = selected;
  }
  isSelectorVisible.value = false;
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

body.dark-mode {
  background: linear-gradient(135deg, #0f1928 0%, #1a2b40 100%);
  color: #e0e6ed;
}

</style>
