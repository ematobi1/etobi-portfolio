<template>
  <MatrixCanvas />
  <TypingMatrix :lines="lines" />
</template>

<script setup>
import TypingMatrix from '@/components/TypingMatrix.vue'
import MatrixCanvas from '@/components/MatrixCanvas.vue'

const lines = [
  "🏠 Home",
  "Welcome to Tobi’s Portfolio",
  "Where code meets clarity, and innovation meets intention.",
  "Hi, I’m Emmanuel Tobi — a full-stack developer who doesn’t just",
  "build features, but engineers solutions that move the needle.",
  "My work lives at the intersection of clean design, intuitive",
  "experiences, and robust systems that scale.",
  "Whether crafting seamless user interfaces or shaping the backend",
  "logic that powers complex products, I bring both imagination",
  "and precision to the table.",
  "If you believe software should not only function but feel right,",
  "you’re in the right place.",
  "Let’s explore what’s possible — and build things that matter."
]
</script>



<style scoped>
.typing-line {

  color: #00ffff;

  font-size: 2.5rem;

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
