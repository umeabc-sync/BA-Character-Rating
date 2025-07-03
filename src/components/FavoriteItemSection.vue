<template>
  <div class="favorite-item-section">
    <button class="favorite-item-button" @click="$emit('open-modal')">
      <img :src="getFavoriteItemImageUrl(character.id)" alt="Favorite Item" class="favorite-item-icon" />
      <span>{{ t('favoriteItem.viewInfo') }}</span>
    </button>
  </div>
</template>

<script setup>
  import { getAssetsFile } from '@/utils/getAssetsFile'
  import { useI18n } from '@/composables/useI18n'

  const { t } = useI18n()

  defineProps({
    character: { type: Object, required: true },
  })

  defineEmits(['open-modal'])

  const getFavoriteItemImageUrl = (id) => {
    return getAssetsFile(`favorite_item/${id}.webp`)
  }
</script>

<style scoped>
  .favorite-item-section {
    margin-top: 12px;
  }

  .favorite-item-button {
    width: 100%;
    background: linear-gradient(45deg, #ffb7ca, #fb9eb1);
    color: #333;
    padding: 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: bold;
    font-size: 1rem;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .favorite-item-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .favorite-item-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  .dark-mode .favorite-item-button {
    background: linear-gradient(45deg, #fd7591, #fb9eb1);
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
</style>
