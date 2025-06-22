<template>
  <div v-if="rating" class="star-rating">
    <template v-for="n in rating[0]" :key="'black-' + n">
      <span class="star black-star">★</span>
    </template>
    <template v-for="n in rating[1]" :key="'blue-' + n">
      <span class="star blue-star">★</span>
    </template>
    <template v-for="n in rating[2]" :key="'red-' + n">
      <span class="star red-star">★</span>
    </template>
  </div>
  <div v-else>
    不適用
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  rating: {
    type: [Array, null],
    required: true
  }
});
</script>

<style scoped>
.star-rating { display: inline-block; font-size: 1.2rem; }
.star { margin: 0 1px; }
.black-star { color: #2c3e50; }
.blue-star { color: #3498db; }
.red-star { color: #e74c3c; }
</style>

