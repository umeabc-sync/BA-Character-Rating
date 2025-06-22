<template>
  <div class="attributes">
    <div class="attribute-row">
      <div class="attribute-label attack-type">攻擊屬性</div>
      <div class="attribute-value">{{ attackType }}</div>
    </div>
    <div class="attribute-row">
      <div class="attribute-label defense-type">裝甲屬性</div>
      <div class="attribute-value">{{ defenseType }}</div>
    </div>
    <div class="attribute-row">
      <div class="attribute-label weapon">使用武器</div>
      <div class="attribute-value">{{ weapon }}</div>
    </div>
    <div class="attribute-row">
      <div class="attribute-label position">角色定位</div>
      <div class="attribute-value">{{ position }}</div>
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
  align-items: center;
}

.attribute-label {
  flex: 1;
  font-weight: bold;
  padding: 8px;
  text-align: center;
  font-size: 0.9rem;
}

.attribute-value {
  color: black;
  flex: 1;
  padding: 8px;
  text-align: center;
  font-size: 0.9rem;
  border-radius: 5px;
  margin-left: 5px;
}

.attack-type { background: #e74c3c; color: white; }
.defense-type { background: #27ae60; color: white; }
.weapon { background: #f39c12; color: white; }
.position { background: #3498db; color: white; }

@media (max-width: 480px) {
  .attribute-row {
    flex-direction: column;
    gap: 5px;
  }
  
  .attribute-label,
  .attribute-value {
    flex: none;
    width: 100%;
  }
}
</style>
