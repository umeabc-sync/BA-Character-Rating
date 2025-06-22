<template>
  <div class="character-info">
    <div class="character-avatar">
      <!-- 假設 '光' 是頭像的佔位符或首字 -->
      光
    </div>
    <div class="character-name">{{ name }}</div>
    <div v-if="nicknames && nicknames.length > 0" class="character-nicknames">
      {{ nicknames.join(', ') }}
    </div>
    <div class="school-badge">{{ school }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  name: {
    type: String,
    required: true
  },
  nicknames: {
    type: Array,
    default: () => []
  },
  school: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.character-info {
  text-align: center;
  margin-bottom: 20px;
}

.character-avatar {
  width: 120px;
  height: 120px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  border: 4px solid white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.character-name {
  font-size: 1.3rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
}

.character-nicknames {
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 10px;
}

.school-badge {
  background: #34495e;
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-block;
}

@media (max-width: 768px) {
  .character-avatar {
    width: 100px;
    height: 100px;
  }
}
</style>
