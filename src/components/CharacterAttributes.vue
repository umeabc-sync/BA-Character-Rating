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
  background: #1a2b40;
  border-color: #2a4a6e;
  color: #e0e6ed;
}
.dark-mode .attribute-label {
  /* Adjust label colors for better harmony in dark mode */
}
.dark-mode .red { background: linear-gradient(45deg, #ff5c8a, #ff8c9d); }
.dark-mode .green { background: linear-gradient(45deg, #00c8b3, #00e0c8); }
.dark-mode .blue { background: linear-gradient(45deg, #2a7fff, #00aeef); }

.red { background: linear-gradient(45deg, #ff8a9f, #ff7591); }
.green { background: linear-gradient(45deg, #50e3c2, #06d6a0); }
.blue { background: linear-gradient(45deg, #87ceeb, #6495ed); }

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
    border-left-color: #2a4a6e;
  }
}
</style>
