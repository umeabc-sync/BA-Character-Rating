<template>
  <div class="skills-section">
    <!-- <div class="rating-title">綜合泛用推薦</div>
    <div class="rating-details">
      {{ overallRecommendation }}
    </div> -->
    
    <div class="skill-recommendation">
      <div class="rating-title">技能推薦順序</div>
      <!-- 使用 v-html 渲染包含 HTML 標籤的字串 -->
      <div class="skill-order" v-html="skillOrder"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  overallRecommendation: {
    type: String,
    required: true
  },
  skillOrder: {
    type: String,
    required: true // 這個 prop 將包含 HTML，所以需要使用 v-html
  }
});
</script>

<style scoped>
.skills-section {
  margin-top: 20px;
}

.skill-recommendation {
  background: #ecf0f1;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
}

/* Dark Mode Overrides for SkillsSection */
.dark-mode .skill-recommendation {
  background: #1f3048; /* Match RatingSection */
}

.dark-mode .skill-order {
  color: #c0c8d0;
}


.skill-order {
  font-size: 0.9rem;
  line-height: 1.8;
  color: #2c3e50;
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

.rating-details {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #34495e;
}
</style>
