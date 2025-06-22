<template>
  <div class="attributes">
    <div class="attribute-row">
      <div class="attribute-label green">攻擊屬性</div>
      <div class="attribute-value">{{ attackType }}</div>
    </div>
    <div class="attribute-row">
      <div class="attribute-label green">裝甲屬性</div>
      <div class="attribute-value">{{ defenseType }}</div>
    </div>
    <div class="attribute-row">
      <div class="attribute-label green">使用武器</div>
      <div class="attribute-value">{{ weapon }}</div>
    </div>
    <div class="attribute-row">
      <div class="attribute-label green">角色定位</div>
      <div class="attribute-value">{{ position }}</div>
    </div>
    <div class="attribute-row">
      <div class="attribute-label blue">專武推薦度</div>
      <div class="attribute-value">{{ uniqueWeaponRecommended }}</div>
    </div>
    <div class="attribute-row">
      <div class="attribute-label red">入手方式</div>
      <div class="attribute-value">{{ acquisitionMethod }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  attackType: {
    type: String,
    required: true
  },
  defenseType: {
    type: String,
    required: true
  },
  weapon: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  uniqueWeaponRecommended: {
    type: String,
    required: true
  },
  acquisitionMethod: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.attributes {
  margin-top: 20px;
}

.attribute-row {
  display: flex;
  margin-bottom: 8px;
  align-items: stretch; /* Make labels and values ​​the same height */
}

.attribute-label {
  flex: 0 0 110px;
  font-weight: bold;
  padding: 8px;
  text-align: center;
  font-size: 0.9rem;
  border-radius: 5px 0 0 5px;
  color: white;
}

.attribute-value {
  color: black;
  flex: 1;
  padding: 8px;
  text-align: left;
  font-size: 0.9rem;
  border-radius: 0 5px 5px 0;
  background: #fff;
  border: 1px solid #e9ecef;
  border-left: none;
  display: flex;
  align-items: center;
}

/* Dark Mode Overrides for CharacterAttributes */
.dark-mode .attribute-value {
  background: #3A4B60;
  border-color: #4A5C70;
  color: #E0E6ED;
}
.dark-mode .attribute-label {
  /* Adjust label colors for better harmony in dark mode */
}
.dark-mode .red { background: #D9667E; }
.dark-mode .green { background: #4281CF; }
.dark-mode .blue { background: #5A85D6; }

.red { background: #ff7591; }
.green { background: #4a90e2; }
.blue { background: #6495ED; }

@media (max-width: 480px) {
  .attribute-row {
    flex-direction: column;
    gap: 5px;
  }
  
  .attribute-label,
  .attribute-value {
    flex: none;
    width: 100%;
    border-radius: 5px; /* Restore rounded corners when stacking */
    border-left: 1px solid #e9ecef;
    text-align: center;
  }
  .dark-mode .attribute-label,
  .dark-mode .attribute-value {
    border-left-color: #4a5c70; /* Dark mode border */
  }
}
</style>
