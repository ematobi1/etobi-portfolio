<template>
  <MatrixCanvas />
  <TypingMatrix :lines="lines" />
</template>

<script setup>
import TypingMatrix from '@/components/TypingMatrix.vue'
import MatrixCanvas from '@/components/MatrixCanvas.vue'

const lines = [
  "í¿  Home",
  "í±‹ Hi, Iâ€™m E Tobi â€“ Fullâ€‘Stack Developer",
  "Building scalable web platforms and AIâ€‘powered audio tools.",
  "í·© I turn complex problems into polished production solutions."
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
