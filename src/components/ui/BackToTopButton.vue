<template>
  <transition name="fade">
    <button v-if="isVisible" class="back-to-top" @click="scrollToTop">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  </transition>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const isVisible = ref(false)

  const handleScroll = () => {
    if (window.scrollY > 400) {
      isVisible.value = true
    } else {
      isVisible.value = false
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<style scoped>
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #6495ed;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
    z-index: 1000;
  }

  .dark-mode .back-to-top {
    background-color: #00aeef;
  }

  .back-to-top:hover {
    transform: scale(1.1);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  @media (min-width: 769px) {
    .back-to-top {
      display: none;
    }
  }
</style>
