<template>
  <div class="evaluation-grid">
    <div class="eval-item city">
      <div class="eval-header">市街</div>
      <div class="eval-value">{{ ratings.city }}</div>
    </div>
    <div class="eval-item outdoor">
      <div class="eval-header">野外</div>
      <div class="eval-value">{{ ratings.outdoor }}</div>
    </div>
    <div class="eval-item indoor">
      <div class="eval-header">室內</div>
      <div class="eval-value">{{ ratings.indoor }}</div>
    </div>
    <div class="eval-item equipment1">
      <div class="eval-header">裝備1</div>
      <div class="eval-value">{{ ratings.newbie }}</div>
    </div>
    <div class="eval-item equipment2">
      <div class="eval-header">裝備2</div>
      <div class="eval-value">{{ ratings.unsuitable }}</div>
    </div>
    <div class="eval-item equipment3">
      <div class="eval-header">裝備3</div>
      <div class="eval-value">{{ ratings.overall }}</div>
    </div>
    <div class="eval-item uniqueWeaponStar2">
      <div class="eval-header">專武2</div>
      <div class="eval-value">{{ ratings.overall }}</div>
    </div>
    <div class="eval-item uniqueWeaponStar3">
      <div class="eval-header">專武3</div>
      <div class="eval-value">{{ ratings.overall }}</div>
    </div>
    <div class="eval-item overall">
      <div class="eval-header">綜合泛用推薦</div>   <!-- TODO 把角評版本改到這裡-->
      <div class="eval-value">{{ ratings.overall }}</div>
    </div>
    <!-- TODO 添加主素材、副素材、l2d所需羈絆的資訊 -->
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  ratings: {
    type: Object,
    required: true,
    // 基礎驗證，確保包含預期的鍵
    validator: (value) => {
      return ['city', 'outdoor', 'indoor', 'newbie', 'unsuitable', 'overall'].every(key => key in value);
    }
  }
});
</script>

<style scoped>
.evaluation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
}

.eval-item {
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
}

.eval-header {
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.eval-value {
  font-size: 1.1rem;
}

.city { background: #ffffff; border: 2px solid #bdc3c7; }
.outdoor { background: #f1c40f; }
.indoor { background: #27ae60; color: white; }
.equipment1 { background: #3498db; color: white; }
.equipment2 { background: #95a5a6; color: white; }
.equipment3 { background: #95a5a6; color: white; }
.uniqueWeaponStar2 { background: #95a5a6; color: white; }
.uniqueWeaponStar3 { background: #95a5a6; color: white; }
.overall { background: #e74c3c; color: white; }

@media (max-width: 768px) {
  .evaluation-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
  
  .eval-item {
    padding: 8px 4px;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .evaluation-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
