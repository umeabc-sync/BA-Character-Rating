<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <div class="modal-header">
        <h3>選擇角色</h3>
        <button class="close-button" @click="$emit('close')">&times;</button>
      </div>
      <div class="modal-body">
        <input type="text" v-model="searchTerm" placeholder="搜尋角色名稱或暱稱..." class="search-input">
        <div class="character-grid">
          <div 
            v-for="char in filteredCharacters" 
            :key="char.id" 
            class="character-item"
            @click="selectCharacter(char.id)"
          >
            <img :src="getAvatarUrl(char.id)" :alt="char.name" class="item-avatar">
            <span class="item-name">{{ char.name }}</span>
          </div>
          <div v-if="filteredCharacters.length === 0" class="no-results">
            找不到符合條件的角色
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  characters: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['select', 'close']);

const searchTerm = ref('');

const filteredCharacters = computed(() => {
  if (!searchTerm.value) {
    return props.characters;
  }
  const lowerCaseSearch = searchTerm.value.toLowerCase();
  return props.characters.filter(char => 
    char.name.toLowerCase().includes(lowerCaseSearch) ||
    (char.nicknames && char.nicknames.some(nick => nick.toLowerCase().includes(lowerCaseSearch)))
  );
});

const getAvatarUrl = (id) => {
  return new URL(`../assets/avatar/${id}.png`, import.meta.url).href;
};

const selectCharacter = (id) => {
  emit('select', id);
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
  max-width: 800px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 25px rgba(0,0,0,0.4);
  border: 1px solid #dee2e6;
}

.dark-mode .modal-content {
  background: #1a2b40;
  border-color: #2a4a6e;
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
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  line-height: 1;
  opacity: 0.8;
  transition: opacity 0.2s;
}
.close-button:hover { opacity: 1; }

.modal-body {
  padding: 20px;
  overflow-y: auto;
}

.search-input {
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 1rem;
}
.dark-mode .search-input {
  background-color: #1f3048;
  border-color: #2a4a6e;
  color: #e0e6ed;
}

.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 15px;
}

.character-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.2s, transform 0.2s;
}
.dark-mode .character-item:hover { background-color: #1f3048; }
.character-item:hover { background-color: #e9ecef; transform: translateY(-3px); }

.item-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #6495ED;
  margin-bottom: 8px;
}
.dark-mode .item-avatar { border-color: #00aeef; }

.item-name { font-weight: bold; font-size: 0.9rem; }

.no-results { text-align: center; padding: 20px; color: #7f8c8d; }
</style>

