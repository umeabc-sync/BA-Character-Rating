<template>
  <div class="attributes">
    <div class="attribute-row">
      <div class="attribute-label green">{{ t('attributes.attackTypeLabel') }}</div>
      <div class="attribute-value">
        <div class="type-icon-wrapper" :class="`type-bg-${attackType.toLowerCase()}`">
          <img :src="getAssetsFile(`icon/Type_Attack_s.webp`)" alt="Attack Icon" class="type-icon" />
        </div>
        <span>{{ t(`attackType.${attackType}`) }}</span>
      </div>
    </div>
    <div class="attribute-row">
      <div class="attribute-label green">{{ t('attributes.defenseTypeLabel') }}</div>
      <div class="attribute-value">
        <div class="type-icon-wrapper" :class="`type-bg-${defenseType.toLowerCase()}`">
          <img :src="getAssetsFile(`icon/Type_Defense_s.webp`)" alt="Defense Icon" class="type-icon" />
        </div>
        <span>{{ t(`defenseType.${defenseType}`) }}</span>
      </div>
    </div>
    <div class="attribute-row">
      <div class="attribute-label green">{{ t('attributes.weaponLabel') }}</div>
      <div class="attribute-value">
        <span class="nexon-font">{{ weapon }}</span>
        <span>{{ t(`weapon.${weapon}`) }}</span>
      </div>
    </div>
    <div class="attribute-row">
      <div class="attribute-label green">{{ t('attributes.positionLabel') }}</div>
      <div class="attribute-value">
        <span class="nexon-font">
          <span v-if="position[0] === 0" style="color: #cc1a25">STRIKER</span>
          <span v-else-if="position[0] === 1" style="color: #006bff">SPECIAL</span>
        </span>
        <span>{{ position[1] }}</span>
      </div>
    </div>
    <div class="attribute-row">
      <div class="attribute-label blue">{{ t('attributes.uniqueWeaponRecommendedLabel') }}</div>
      <div class="attribute-value">{{ uniqueWeaponRecommended }}</div>
    </div>
    <div class="attribute-row">
      <div class="attribute-label red">{{ t('attributes.acquisitionMethodLabel') }}</div>
      <div class="attribute-value">{{ acquisitionMethod }}</div>
    </div>
  </div>
</template>

<script setup>
  import { useI18n } from '@/composables/useI18n.js'
  import { getAssetsFile } from '@/utils/getAssetsFile'

  const { t } = useI18n()

  defineProps({
    attackType: {
      type: String,
      required: true,
    },
    defenseType: {
      type: String,
      required: true,
    },
    weapon: {
      type: String,
      required: true,
    },
    position: {
      type: Array,
      required: true,
    },
    uniqueWeaponRecommended: {
      type: String,
      required: true,
    },
    acquisitionMethod: {
      type: String,
      required: true,
    },
  })
</script>

<style scoped>
  .attribute-row {
    display: flex;
    margin-bottom: 8px;
    align-items: stretch; /* Make labels and values the same height */
  }

  .attribute-label {
    flex: 0 0 110px;
    font-weight: bold;
    padding: 8px;
    font-size: 0.9rem;
    border-radius: 5px 0 0 5px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
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
    gap: 8px;
  }

  .type-icon-wrapper {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .type-icon {
    width: 14px;
    height: 14px;
    object-fit: contain;
  }

  .type-bg-explosive,
  .type-bg-light {
    background: #a70c19;
  }
  .type-bg-piercing,
  .type-bg-heavy {
    background: #b26d1f;
  }
  .type-bg-mystic,
  .type-bg-special {
    background: #216f9c;
  }
  .type-bg-sonic,
  .type-bg-elastic {
    background: #9431a5;
  }

  .nexon-font {
    font-family: 'NEXON Football Gothic', sans-serif;
    font-style: italic;
    font-weight: 300;
    font-size: 1rem;
    top: 2px;
    position: relative;
  }

  /* Dark Mode Overrides for CharacterAttributes */
  .dark-mode .attribute-value {
    background: #1a2b40;
    border-color: #2a4a6e;
    color: #e0e6ed;
  }

  .dark-mode .red {
    background: linear-gradient(45deg, #ff5c8a, #ff8c9d);
  }
  .dark-mode .green {
    background: linear-gradient(45deg, #00c8b3, #00e0c8);
  }
  .dark-mode .blue {
    background: linear-gradient(45deg, #2a7fff, #00aeef);
  }

  .red {
    background: linear-gradient(45deg, #ff8a9f, #ff7591);
  }
  .green {
    background: linear-gradient(45deg, #50e3c2, #06d6a0);
  }
  .blue {
    background: linear-gradient(45deg, #87ceeb, #6495ed);
  }

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
      justify-content: center;
    }
    .dark-mode .attribute-label,
    .dark-mode .attribute-value {
      border-left-color: #2a4a6e;
    }
  }
</style>
