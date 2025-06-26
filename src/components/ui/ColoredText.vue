<template>
  <span v-html="processedText"></span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: ''
  }
});

// 定義一個關鍵字到 CSS class 的映射，方便未來擴充
const colorClassMap = {
  blue: 'text-blue',
  green: 'text-green',
  teal: 'text-teal',
  red: 'text-red',
  purple: 'text-purple',
  bold: 'text-bold', // 新增粗體
  italic: 'text-italic', // 新增斜體
};

const processedText = computed(() => {
  if (!props.text) {
    return '';
  }

  let html = props.text;

  // 定義處理順序，確保樣式可以正確疊加
  // 通常，先處理顏色，再處理粗體/斜體，可以讓內部標籤正確應用樣式
  const processingOrder = ['blue', 'green', 'teal', 'red', 'purple', 'bold', 'italic'];

  for (const key of processingOrder) {
    const className = colorClassMap[key];
    if (!className) continue; // Skip if key not found in map

    // 使用非貪婪匹配 (.*?) 來正確處理多個或巢狀標籤
    const regex = new RegExp(`<${key}>(.*?)</${key}>`, 'g');
    html = html.replace(regex, `<span class="${className}">$1</span>`);
    // 為了避免重複處理，可以在替換後將原始標籤從 map 中移除，
    // 但由於我們使用 processingOrder 陣列，這樣做不是必須的，
    // 且保留在 map 中方便未來擴充。
  }

  return html;
});
</script>

<style scoped>
/* 
  使用 :deep() 是因為 v-html 的內容預設不受 scoped CSS 影響。
  顏色選擇旨在融入「蔚藍檔案」的風格，並確保在亮色和暗色模式下的可讀性。
*/
:deep(.text-blue) {
  color: var(--color-blue);
}

:deep(.text-green) {
  color: var(--color-green);
}

:deep(.text-teal) {
  color: var(--color-teal);
}

:deep(.text-red) {
  color: var(--color-red);
}

:deep(.text-purple) {
  color: var(--color-purple);
}

:deep(.text-bold) {
  font-weight: bold;
}

:deep(.text-italic) {
  font-style: italic;
}

</style>