<template>
  <div class="image-loader-wrapper">
    <div v-if="isLoading" class="placeholder">
    </div>
    <img
      v-show="!isLoading"
      :src="src"
      :alt="alt"
      :style="{ objectFit: objectFit }"
      @load="onLoad"
      @error="onError"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  objectFit: { type: String, default: 'cover' } // 'cover', 'contain', 'fill', etc.
});

const isLoading = ref(true);

const onLoad = () => {
  isLoading.value = false;
};

const onError = () => {
  isLoading.value = false; // 停止顯示載入動畫，讓瀏覽器顯示預設的圖片錯誤圖示
};

// Watch for changes in the src prop and reset isLoading to true
watch(() => props.src, (newSrc, oldSrc) => {
  if (newSrc !== oldSrc) {
    isLoading.value = true; // Re-enable loading state
  }
});
</script>

<style scoped>
.image-loader-wrapper {
  position: relative;
  overflow: hidden; /* 確保 placeholder 動畫不會超出邊界 (例如圓角) */
  display: inline-block;
  vertical-align: middle;
  background-color: inherit; /* 繼承父層的背景色 */
}

.image-loader-wrapper img {
  display: block;
  width: 100%;
  height: 100%;
}

.placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e9ecef; /* 淺灰色底 */
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, .5) 50%,
    rgba(255, 255, 255, 0) 60%
  ) #e9ecef;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1.5s loading-skeleton ease-in-out infinite;
}

@keyframes loading-skeleton {
  to {
    background-position-x: -20%;
  }
}

/* 透過 :global 選擇器來應用 body 上的 .dark-mode */
:global(body.dark-mode) .placeholder {
  background-color: #2a4a6e;
  background: linear-gradient(100deg, rgba(42, 74, 110, 0) 40%, rgba(42, 74, 110, .5) 50%, rgba(42, 74, 110, 0) 60%) #1f3048;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1.5s loading-skeleton ease-in-out infinite;
}
</style>