<template>
  <MatrixCanvas />
  <TypingMatrix :lines="lines" />
</template>

<script setup>
import MatrixCanvas from '@/components/MatrixCanvas.vue'
import TypingMatrix from '@/components/TypingMatrix.vue'

const lines = [
  "í³ž Contact",
  "emma.tobi1@gmail.com",
  "GitHub: ematobi1",
  "LinkedIn: your-link"
]
</script>

<style scoped>
.typing-line {

  color: #00ffff;

  font-size: 1.5rem;

  text-shadow: 0 0 6px #00ffff, 0 0 12px #00ffff;

  line-height: 2.2rem;

  background: repeating-linear-gradient(

    transparent 0px,

    transparent 3px,

    rgba(0,255,255,0.04) 3px,

    rgba(0,255,255,0.04) 6px

  );

}
</style>
