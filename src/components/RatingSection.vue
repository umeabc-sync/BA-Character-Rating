<template>
  <div class="rating-section">
    <div class="rating-title">{{ title }}</div>
    <div class="rating-details">
      <slot></slot> <!-- 預設 slot 用於插入內容 -->
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.rating-section {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.rating-title {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.rating-details {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #34495e;
}

/* 星星樣式，因為在 RatingCard 中使用，所以也放在這裡 */
.stars {
  color: #f39c12;
  font-size: 1.2rem;
}
</style>
