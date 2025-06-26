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
  },
  enabled: {
    type: Boolean,
    default: true
  }
});

// Define a keyword-to-CSS class mapping to facilitate future expansion
const colorClassMap = {
  blue: 'text-blue',
  green: 'text-green',
  teal: 'text-teal',
  red: 'text-red',
  purple: 'text-purple',
  bold: 'text-bold',
  italic: 'text-italic'
};

const processedText = computed(() => {
  if (!props.text) {
    return '';
  }

  // If coloring is not enabled, return the raw text
  if (!props.enabled) {
    return props.text;
  }

  let html = props.text;

  // Define the processing order to ensure that styles can be correctly superimposed
	// Usually, processing color first, then bold/italic, allows the internal tags to be styled correctly
  const processingOrder = ['blue', 'green', 'teal', 'red', 'purple', 'bold', 'italic'];

  for (const key of processingOrder) {
    const className = colorClassMap[key];
    if (!className) continue; // Skip if key not found in map

    // Use non-greedy matching (.*?) to properly handle multiple or nested tags
    const regex = new RegExp(`<${key}>(.*?)</${key}>`, 'g');
    html = html.replace(regex, `<span class="${className}">$1</span>`);
    // To avoid duplicate processing, the original tag can be removed from the map after replacement,
    // but since we use the processingOrder array, this is not necessary,
    // and it is kept in the map for future expansion.
  }

  return html;
});
</script>

<style scoped>
/* 
  :deep() is used because v-html's content is not affected by scoped CSS by default.
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