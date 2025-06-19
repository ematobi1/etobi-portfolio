<template>
  <MatrixCanvas />
  <TypingMatrix :lines="lines" />
</template>

<script setup>
import MatrixCanvas from '@/components/MatrixCanvas.vue'
import TypingMatrix from '@/components/TypingMatrix.vue'

const lines = [
  "✍🏽 Blog",
  "Thinking Aloud – Notes from the Code Frontier",
  "Sometimes the most valuable code we write never",
  "makes it to production — it lives in the lessons",
  "we carry forward. My blog is where I unpack those",
  "moments: Breakthroughs, setbacks, systems, soft",
  "skills, and the subtle art of building with intent.",
  "Recent insights:",
  "“Beyond Code: Why Great Developers Think",
  "Like Architects”",
  "“The Admin Panel as Product: Designing",
  "Control with Confidence”",
  "“Side Projects, Sharp Skills: My Personal R&D Lab”",
  "These aren’t just thoughts — they’re windows",
  "into how I work, think, and grow."
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
