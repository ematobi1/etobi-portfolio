<template>
  <div class="demo-page">
    <transition name="zoom-pop">
      <h2 class="reveal-text">Etobi Portfolio</h2>
    </transition>

    <transition name="slide-left">
      <p>This paragraph slides in from the left with inertia.</p>
    </transition>

    <button class="bouncy-btn">Bouncy Button</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const title = document.querySelector('.reveal-text')
  if (title) {
    const chars = title.textContent?.split('') || []
    title.innerHTML = chars
      .map((char, i) => `<span style="--i:${i}">${char}</span>`)
      .join('')
  }
})
</script>

<style scoped>
.demo-page {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
