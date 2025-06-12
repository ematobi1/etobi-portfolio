<template>
  <MatrixCanvas />
  <TypingMatrix :lines="lines" />
</template>

<script setup>
import TypingMatrix from '@/components/TypingMatrix.vue'
import MatrixCanvas from '@/components/MatrixCanvas.vue'

const lines = [
  "í»  Projects",
  "DevHealth Project",
  "DevHealth",
  "A health tracking application built with Vue.js.",
  "ExamLytics Project",
  "ExamLytics",
  "A tool to track academic performance, built with React.",
  "Number Guess Game",
  "Number Guess Game",
  "A fun game built with JavaScript."
]
</script>

<style scoped>
.typing-line {
  text-shadow: 0 0 4px #00ff66, 0 0 8px #00ff66;
  line-height: 1.8rem;
  background: repeating-linear-gradient(
    transparent 0px,
    transparent 3px,
    rgba(0, 255, 0, 0.05) 3px,
    rgba(0, 255, 0, 0.05) 6px
  );
}
</style>
