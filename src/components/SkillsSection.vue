<template>
  <div class="skills-section">
    <div class="recommendation-card">
      <div class="rating-title">綜合泛用推薦</div>
      <div class="recommendation-details">
        {{ overallRecommendation }}
      </div>

      <div class="separator"></div>

      <div class="rating-title">專武推薦度說明</div>
      <div class="recommendation-details">
        {{ uniqueWeaponRecommendedSummary }}
      </div>
    </div>
    
    <div class="recommendation-card">
      <div class="rating-title">技能推薦順序</div>
      <div class="skill-order-container">
        <template v-for="(skill, index) in skillOrder" :key="skill">
          <SkillTag :skill="skill" />
          <span v-if="index < skillOrder.length - 1" class="separator-arrow">›</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import SkillTag from './SkillTag.vue';

defineProps({
  overallRecommendation: {
    type: String,
    required: true
  },
  uniqueWeaponRecommendedSummary: {
    type: String,
    required: true
  },
  skillOrder: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.skills-section {
  /* Parent container controls spacing */
}

.recommendation-card {
  background: #ecf0f1;
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
}

.recommendation-card:first-child {
  margin-top: 0;
}

/* Dark Mode Overrides for SkillsSection */
.dark-mode .recommendation-card {
  background: #1f3048; /* Match RatingSection */
}

.dark-mode .skill-order, .dark-mode .recommendation-details {
  color: #c0c8d0;
}

.skill-order-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.separator-arrow {
  font-size: 1.5rem;
  color: #bdc3c7;
  font-weight: bold;
  line-height: 1;
}

.recommendation-details {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #34495e;
}

/* For consistency, reuse the RatingSection style */
.rating-title {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #2c3e50;
  position: relative;
  padding-left: 15px;
}

/* Added UI decorative lines in the style of BA */
.rating-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 20px;
  background-color: #6495ed;
  border-radius: 3px;
}

.dark-mode .rating-title {
  color: #e0e6ed;
}

.dark-mode .rating-title::before {
  background-color: #00aeef;
}

.separator {
  height: 1px;
  background-color: #dee2e6;
  margin: 15px 0;
}

.dark-mode .separator {
  background-color: #2a4a6e;
}

.dark-mode .separator-arrow {
  color: #5a6e8a;
}
</style>
