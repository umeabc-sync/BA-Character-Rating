<template>
  <div class="evaluation-grid">
    <div class="eval-item city">
      <div class="eval-header">市街</div>
      <div class="eval-value">{{ characterData.city }}</div>
    </div>
    <div class="eval-item outdoor">
      <div class="eval-header">野外</div>
      <div class="eval-value">{{ characterData.outdoor }}</div>
    </div>
    <div class="eval-item indoor">
      <div class="eval-header">室內</div>
      <div class="eval-value">{{ characterData.indoor }}</div>
    </div>

    <div v-for="(equip, index) in characterData.equipments" :key="equip" class="eval-item equipment">
      <div class="eval-header">裝備{{ index + 1 }}</div>
      <div class="eval-value">{{ equip }}</div>
    </div>

    <div class="eval-item uniqueWeaponStar2">
      <div class="eval-header">專武2</div>
      <div class="eval-value">{{ characterData.uniqueWeaponStar2 }}</div>
    </div>
    <div class="eval-item uniqueWeaponStar3">
      <div class="eval-header">專武3</div>
      <div class="eval-value">{{ uniqueWeaponStar3Text }}</div>
    </div>

    <div class="eval-item opart">
      <div class="eval-header">主素材</div>
      <div class="eval-value">{{ characterData.skillMainOparts || 'N/A' }}</div>
    </div>
    <div class="eval-item opart">
      <div class="eval-header">副素材</div>
      <div class="eval-value">{{ characterData.skillSubOparts || 'N/A' }}</div>
    </div>
    <div class="eval-item l2d">
      <div class="eval-header">L2D羈絆</div>
      <div class="eval-value">{{ characterData.l2dUnlock }}</div>
    </div>

    <div class="eval-item version">
      <div class="eval-header">角評版本</div>
      <div class="eval-value">{{ characterData.ratingVersion }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

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

const uniqueWeaponStar3Text = computed(() => {
  if (Array.isArray(props.characterData.uniqueWeaponStar3) && props.characterData.uniqueWeaponStar3.length === 2) {
    const [terrainKey, rank] = props.characterData.uniqueWeaponStar3;
    const terrainName = terrainMap[terrainKey] || terrainKey;
    return `${terrainName} → ${rank}`;
  }
  return props.characterData.uniqueWeaponStar3 || 'N/A';
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
.equipment { background: #3498db; color: white; }
.uniqueWeaponStar2 { background: #95a5a6; color: white; }
.uniqueWeaponStar3 { background: #95a5a6; color: white; }
.opart { background: #8e44ad; color: white; }
.l2d { background: #e67e22; color: white; }
.version { background: #2c3e50; color: white; }

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
