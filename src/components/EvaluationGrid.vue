<template>
  <div class="evaluation-grid">
    <EvaluationItem :header="t('terrain.city')" color="green" data-item="city">
      <img :src="getAdaptImageUrl(characterData.city)" :alt="characterData.city" class="eval-image">
    </EvaluationItem>
    <EvaluationItem :header="t('terrain.outdoor')" color="green" data-item="outdoor">
      <img :src="getAdaptImageUrl(characterData.outdoor)" :alt="characterData.outdoor" class="eval-image">
    </EvaluationItem>
    <EvaluationItem :header="t('terrain.indoor')" color="green" data-item="indoor">
      <img :src="getAdaptImageUrl(characterData.indoor)" :alt="characterData.indoor" class="eval-image">
    </EvaluationItem>

    <EvaluationItem
      v-for="(equip, index) in characterData.equipments"
      :key="equip"
      :header="`${t('evaluation.equipment')}${index + 1}`"
      color="blue"
      :data-item="`equip-${index + 1}`"
    >
      <img :src="getEquipmentImageUrl(equip)" :alt="equip" class="eval-image">
    </EvaluationItem>

    <EvaluationItem :header="t('evaluation.uniqueWeapon2')" color="peach" data-item="uw2">
      {{ characterData.uniqueWeaponStar2 }}
    </EvaluationItem>
    <EvaluationItem :header="t('evaluation.uniqueWeapon3')" color="peach" data-item="uw3">
      <template v-if="Array.isArray(characterData.uniqueWeaponStar3) && characterData.uniqueWeaponStar3.length === 2">
        {{ t(`terrain.${characterData.uniqueWeaponStar3[0]}`) }} → 
        <img :src="getAdaptImageUrl(characterData.uniqueWeaponStar3[1])" :alt="characterData.uniqueWeaponStar3[1]" class="eval-image-inline" style="padding-left: 0.25em;">
      </template>
      <template v-else>
        {{ characterData.uniqueWeaponStar3 || 'N/A' }}
      </template>
    </EvaluationItem>

    <EvaluationItem :header="t('evaluation.mainMaterial')" color="yellow" data-item="main-material">
      <img v-if="characterData.skillMainOparts" :src="getOpartImageUrl(characterData.skillMainOparts)" :alt="characterData.skillMainOparts" class="eval-image">
      <span v-else>N/A</span>
    </EvaluationItem>
    <EvaluationItem :header="t('evaluation.subMaterial')" color="yellow" data-item="sub-material">
      <img v-if="characterData.skillSubOparts" :src="getOpartImageUrl(characterData.skillSubOparts)" :alt="characterData.skillSubOparts" class="eval-image">
      <span v-else>N/A</span>
    </EvaluationItem>
    <EvaluationItem :header="t('evaluation.l2dBond')" color="pink" data-item="l2d">
      {{ characterData.l2dUnlock }}
    </EvaluationItem>

    <EvaluationItem :header="t('evaluation.ratingVersion')" color="darkgray" data-item="version">
      {{ characterData.ratingVersion }}
    </EvaluationItem>
  </div>
</template>

<script setup>
import EvaluationItem from './EvaluationItem.vue';
import { getOpartImageUrl } from '@/utils/getOpartImageUrl';
import { getAdaptImageUrl } from '@/utils/getAdaptImageUrl';
import { getEquipmentImageUrl } from '@/utils/getEquipmentImageUrl';
import { useI18n } from '@/composables/useI18n';

const { t } = useI18n();

const props = defineProps({
  characterData: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.evaluation-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.eval-image {
  height: 30px;
  object-fit: contain;
}

.eval-image-inline {
  height: 1.1rem; /* Match font size */
  vertical-align: middle;
}

/*
  We use :deep() to apply order to the child component's root element.
  This allows the parent grid to control the layout of its children,
  even though the .eval-item class is inside a scoped child component.
*/
/* Default order for 4 columns (desktop) */
:deep(.eval-item[data-item="city"]) { order: 1; }
:deep(.eval-item[data-item="outdoor"]) { order: 2; }
:deep(.eval-item[data-item="indoor"]) { order: 3; }
:deep(.eval-item[data-item="version"]) { order: 4; }
:deep(.eval-item[data-item="equip-1"]) { order: 5; }
:deep(.eval-item[data-item="equip-2"]) { order: 6; }
:deep(.eval-item[data-item="equip-3"]) { order: 7; }
:deep(.eval-item[data-item="l2d"]) { order: 8; }
:deep(.eval-item[data-item="uw2"]) { order: 9; }
:deep(.eval-item[data-item="uw3"]) { order: 10; }
:deep(.eval-item[data-item="main-material"]) { order: 11; }
:deep(.eval-item[data-item="sub-material"]) { order: 12; }

@media (max-width: 768px) {
  .evaluation-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  /* Order for 3 columns (tablet) */
  :deep(.eval-item[data-item="city"]) { order: 1; }
  :deep(.eval-item[data-item="outdoor"]) { order: 2; }
  :deep(.eval-item[data-item="indoor"]) { order: 3; }
  :deep(.eval-item[data-item="equip-1"]) { order: 4; }
  :deep(.eval-item[data-item="equip-2"]) { order: 5; }
  :deep(.eval-item[data-item="equip-3"]) { order: 6; }
  :deep(.eval-item[data-item="uw2"]) { order: 7; }
  :deep(.eval-item[data-item="uw3"]) { order: 8; }
  :deep(.eval-item[data-item="l2d"]) { order: 9; }
  :deep(.eval-item[data-item="main-material"]) { order: 10; }
  :deep(.eval-item[data-item="sub-material"]) { order: 11; }
  :deep(.eval-item[data-item="version"]) { order: 12; }
}

@media (max-width: 480px) {
  .evaluation-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Reset order for 2 columns (mobile) to follow DOM order */
  :deep(.eval-item[data-item]) {
    order: initial;
  }
}
</style>
