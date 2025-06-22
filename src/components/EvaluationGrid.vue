<template>
  <div class="evaluation-grid">
    <div class="eval-item green">
      <div class="eval-header">市街</div>
      <div class="eval-value">
        <img :src="getAdaptImageUrl(characterData.city)" :alt="characterData.city" class="eval-image">
      </div>
    </div>
    <div class="eval-item green">
      <div class="eval-header">野外</div>
      <div class="eval-value">
        <img :src="getAdaptImageUrl(characterData.outdoor)" :alt="characterData.outdoor" class="eval-image">
      </div>
    </div>
    <div class="eval-item green">
      <div class="eval-header">室內</div>
      <div class="eval-value">
        <img :src="getAdaptImageUrl(characterData.indoor)" :alt="characterData.indoor" class="eval-image">
      </div>
    </div>

    <div v-for="(equip, index) in characterData.equipments" :key="equip" class="eval-item blue">
      <div class="eval-header">裝備{{ index + 1 }}</div>
      <div class="eval-value">
        <img :src="getEquipmentImageUrl(equip)" :alt="equip" class="eval-image">
      </div>
    </div>

    <div class="eval-item orange">
      <div class="eval-header">專武2</div>
      <div class="eval-value">{{ characterData.uniqueWeaponStar2 }}</div>
    </div>
    <div class="eval-item orange">
      <div class="eval-header">專武3</div>
      <div class="eval-value" v-if="Array.isArray(characterData.uniqueWeaponStar3)">
        {{ terrainMap[characterData.uniqueWeaponStar3[0]] || characterData.uniqueWeaponStar3[0] }} → 
        <img :src="getAdaptImageUrl(characterData.uniqueWeaponStar3[1])" :alt="characterData.uniqueWeaponStar3[1]" class="eval-image-inline" style="padding-left: 0.25em;">
      </div>
      <div class="eval-value" v-else>
        {{ characterData.uniqueWeaponStar3 || 'N/A' }}
      </div>
    </div>

    <div class="eval-item yellow">
      <div class="eval-header">主素材</div>
      <div class="eval-value">
        <img v-if="characterData.skillMainOparts" :src="getOpartImageUrl(characterData.skillMainOparts)" :alt="characterData.skillMainOparts" class="eval-image">
        <span v-else>N/A</span>
      </div>
    </div>
    <div class="eval-item yellow">
      <div class="eval-header">副素材</div>
      <div class="eval-value">
        <img v-if="characterData.skillSubOparts" :src="getOpartImageUrl(characterData.skillSubOparts)" :alt="characterData.skillSubOparts" class="eval-image">
        <span v-else>N/A</span>
      </div>
    </div>
    <div class="eval-item pink">
      <div class="eval-header">L2D羈絆</div>
      <div class="eval-value">{{ characterData.l2dUnlock }}</div>
    </div>

    <div class="eval-item darkgray">
      <div class="eval-header">角評版本</div>
      <div class="eval-value">{{ characterData.ratingVersion }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  characterData: {
    type: Object,
    required: true
  }
});

const terrainMap = {
  'indoor': '室內',
  'outdoor': '野外',
  'city': '市街'
};

const adaptRankMap = {
  'SS': 5,
  'S': 4,
  'A': 3,
  'B': 2,
  'C': 1,
  'D': 0
};

const getAdaptImageUrl = (rank) => {
  const rankNumber = adaptRankMap[rank];
  if (rankNumber !== undefined) {
    return new URL(`../assets/adaptresult/Adaptresult${rankNumber}.png`, import.meta.url).href;
  }
  return ''; // Return empty string or a placeholder if rank is not found
};

const getEquipmentImageUrl = (name) => {
  return new URL(`../assets/equiment/${name}.webp`, import.meta.url).href;
};

const getOpartImageUrl = (name) => {
  if (!name) return '';
  return new URL(`../assets/opart/${name}.webp`, import.meta.url).href;
};

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
  background: rgba(255, 255, 255, 0.7);
  border-top: 4px solid; /* Change the color of the top border */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* Dark Mode Overrides for EvaluationGrid */
.dark-mode .eval-item {
  background: rgba(45, 58, 75, 0.7);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  color: #e0e6ed;
}

.eval-header {
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: #555;
}

.dark-mode .eval-header {
  color: #c0c8d0;
}

.eval-value {
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30px; /* Give some height for images to load into */
  color: #2c3e50;
}

.dark-mode .eval-value {
  color: #e0e6ed; /* Light text for value */
}

.eval-image {
  height: 30px;
  object-fit: contain;
}

.eval-image-inline {
  height: 1.1rem; /* Match font size */
  vertical-align: middle;
}

.yellow { border-color: #f1c40f; }
.green { border-color: #27ae60; }
.blue { border-color: #3498db; }
.gray { border-color: #95a5a6; }
.purple { border-color: #8e44ad; }
.orange { border-color: #e67e22; }
.pink { border-color: #ff7591; }
.darkgray { border-color: #2c3e50; }

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
