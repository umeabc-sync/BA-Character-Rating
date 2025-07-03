<template>
  <div class="data-source-container">
    <a
      href="https://space.bilibili.com/35434465"
      target="_blank"
      rel="noopener noreferrer"
      :title="t('dataSource.title')"
    >
      <img :src="maoyeImageUrl" alt="夜貓攻略組 Bilibili" />
    </a>
    <p class="source-text">{{ t('dataSource.text') }}</p>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useI18n } from '@/composables/useI18n.js'
  import { getAssetsFile } from '@/utils/getAssetsFile'

  const { t } = useI18n()
  const maoyeImageUrl = computed(() => getAssetsFile('maoye.webp'))
</script>

<style scoped>
  .data-source-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Vertically center content within its wrapper */
  }

  .data-source-container a {
    display: block; /* Make the link a block to contain the image properly */
    flex-grow: 1; /* Allow the link to grow and fill vertical space */
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 0.25rem;
    min-height: 0; /* Prevent flex item from overflowing */
    width: 100%;
  }

  .source-text {
    font-size: 0.85rem;
    color: #6c757d;
    margin: 0;
    margin-top: 10px; /* Space between image and text */
    width: 100%;
    text-align: center; /* Align text to the left */
  }

  .data-source-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Maintain aspect ratio while fitting inside the container */
    transition:
      transform 0.3s ease,
      filter 0.3s ease;
  }

  .data-source-container a:hover img {
    transform: scale(1.05);
    filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.3));
  }

  /* Dark Mode */
  .dark-mode .source-text {
    color: #98a6b3;
  }
  .dark-mode .data-source-container a:hover img {
    filter: drop-shadow(0 4px 15px rgba(0, 174, 239, 0.4));
  }
</style>
