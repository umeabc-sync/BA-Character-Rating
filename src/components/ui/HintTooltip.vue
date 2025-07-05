<template>
  <div class="hint-tooltip-wrapper">
    <div class="tooltip-inner-content" ref="contentRef" @mouseenter="updateTooltipPosition">
      <slot></slot>
      <div class="hint-tooltip-text" ref="tooltipRef" :style="tooltipStyle">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  defineProps({
    text: {
      type: String,
      required: true,
    },
  })

  const contentRef = ref(null)
  const tooltipRef = ref(null)
  const tooltipStyle = ref({})

  const updateTooltipPosition = () => {
    // Ensure the elements are available before calculating
    if (!contentRef.value || !tooltipRef.value) return

    const margin = 8 // Keep a small 8px margin from the screen edge
    const viewportWidth = window.innerWidth

    const contentRect = contentRef.value.getBoundingClientRect()
    const tooltipWidth = tooltipRef.value.offsetWidth

    // Calculate the ideal centered position of the tooltip relative to the viewport
    const contentCenter = contentRect.left + contentRect.width / 2
    const idealLeft = contentCenter - tooltipWidth / 2
    const idealRight = contentCenter + tooltipWidth / 2

    let newStyle = {}

    // Check for right-side overflow
    if (idealRight > viewportWidth - margin) {
      const overflowAmount = idealRight - (viewportWidth - margin)
      // If it overflows, adjust the 'left' property to pull it back into view
      newStyle.left = `calc(50% - ${overflowAmount}px)`
    }
    // Check for left-side overflow
    else if (idealLeft < margin) {
      const overflowAmount = margin - idealLeft
      // If it overflows, adjust the 'left' property to push it back into view
      newStyle.left = `calc(50% + ${overflowAmount}px)`
    }
    // If no overflow, ensure it uses the default centered position
    else {
      newStyle.left = '50%'
    }

    tooltipStyle.value = newStyle
  }
</script>

<style scoped>
  /* This class takes over the styling and ensures a reliable positioning context. */
  .tooltip-inner-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tooltip-inner-content:hover .hint-tooltip-text {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(8px);
  }

  .hint-tooltip-text {
    position: absolute;
    top: 100%;
    left: 50%; /* Dynamically controlled by the script to prevent overflow. */
    transform: translateX(-50%) translateY(4px);
    background-color: #2c3e50;
    color: white;
    padding: 6px 10px;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    white-space: nowrap;
    z-index: 20;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }
</style>

<style>
  /* Non-scoped style for dark mode */
  .dark-mode .hint-tooltip-text {
    background-color: #e0e6ed;
    color: #1a2b40;
  }
</style>
