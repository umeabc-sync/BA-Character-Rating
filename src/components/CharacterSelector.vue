<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <div class="modal-header">
        <h3>選擇角色</h3>
        <button class="close-button" @click="$emit('close')">&times;</button>
      </div>
      <div class="modal-body">
        <input type="text" v-model="searchTerm" placeholder="搜尋角色名稱或暱稱..." class="search-input">
        
        <div class="filter-controls">
          <div class="filter-group">
            <span class="filter-label">攻擊屬性:</span>
            <button @click="selectFilter('attackType', null)" :class="{ active: !selectedAttackType }">全部</button>
            <button v-for="type in attackTypes" :key="type" @click="selectFilter('attackType', type)" :class="{ active: selectedAttackType === type }">
              {{ t(`attackType.${type}`) }}
            </button>
          </div>
          <div class="filter-group">
            <span class="filter-label">學　　園:</span>
            <button @click="selectFilter('school', null)" :class="{ active: !selectedSchool }">全部</button>
            <button v-for="school in schools" :key="school" @click="selectFilter('school', school)" :class="{ active: selectedSchool === school }">
              {{ school }}
            </button>
          </div>
        </div>

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
import { useI18n } from '../composables/useI18n';

const { t } = useI18n();
const props = defineProps({
  characters: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['select', 'close']);

const searchTerm = ref('');
const selectedAttackType = ref(null);
const selectedSchool = ref(null);

const attackTypes = computed(() => {
  return [...new Set(props.characters.map(c => c.attackType))].sort();
});

const schools = computed(() => {
  return [...new Set(props.characters.map(c => c.school))].sort();
});

const selectFilter = (filterType, value) => {
  if (filterType === 'attackType') {
    selectedAttackType.value = value;
  } else if (filterType === 'school') {
    selectedSchool.value = value;
  }
};

const filteredCharacters = computed(() => {
  let characters = props.characters;

  if (selectedAttackType.value) {
    characters = characters.filter(char => char.attackType === selectedAttackType.value);
  }

  if (selectedSchool.value) {
    characters = characters.filter(char => char.school === selectedSchool.value);
  }

  if (searchTerm.value) {
    const lowerCaseSearch = searchTerm.value.toLowerCase();
    characters = characters.filter(char => 
      char.name.toLowerCase().includes(lowerCaseSearch) ||
      (char.nicknames && char.nicknames.some(nick => nick.toLowerCase().includes(lowerCaseSearch)))
    );
  }
  return characters;
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
  font-size: 1rem;
}
.dark-mode .search-input {
  background-color: #1f3048;
  border-color: #2a4a6e;
  color: #e0e6ed;
}

.filter-controls {
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #dee2e6;
}

.dark-mode .filter-controls {
  border-bottom-color: #2a4a6e;
}

.filter-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-label {
  font-weight: bold;
  margin-right: 8px;
  font-size: 0.9rem;
  white-space: nowrap;
}

.dark-mode .filter-label {
  color: #c0c8d0;
}

.filter-group button {
  padding: 5px 12px;
  border: 1px solid #bdc3c7;
  border-radius: 15px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.85rem;
}

.dark-mode .filter-group button { background-color: #1f3048; border-color: #2a4a6e; color: #e0e6ed; }
.filter-group button:hover { background-color: #e9ecef; border-color: #6495ed; }
.dark-mode .filter-group button:hover { background-color: #2a4a6e; border-color: #00aeef; }
.filter-group button.active { background-color: #6495ed; color: white; border-color: #6495ed; font-weight: bold; }
.dark-mode .filter-group button.active { background-color: #00aeef; border-color: #00aeef;
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
