<template>
  <MatrixCanvas />
  <TypingMatrix :lines="lines" />
</template>

<script setup>
import MatrixCanvas from '@/components/MatrixCanvas.vue'
import TypingMatrix from '@/components/TypingMatrix.vue'

const lines = [
  "Ì≥ù Blog",
  "WebSocket Dashboards + Firestore Sync",
  "Stem Separation with WhisperX + FastAPI",
  "DJ Mixer ML: Design & JavaScript"
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
