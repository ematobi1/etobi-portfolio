<template>
  <MatrixCanvas />
  <TypingMatrix :lines="lines" />
</template>

<script setup>
import MatrixCanvas from '@/components/MatrixCanvas.vue'
import TypingMatrix from '@/components/TypingMatrix.vue'

const lines = [
  "👨🏽‍💻 About",
  "The Developer Who Thinks Like a Designer,",
  "Codes Like an Engineer, and Moves Like a Founder",
  "",
  "My journey as a full-stack developer has been",
  "guided by one core belief: build with the end in mind.",
  "From the way a button responds to a tap,",
  "to how a database handles a million queries —",
  "I obsess over every layer of the experience.",
  "",
  "I love working at the edge of possibility —",
  "where logic meets emotion, and data drives intuition.",
  "I approach software not as code, but as craft —",
  "something that should solve real problems while",
  "feeling frictionless to the user.",
  "",
  "I’ve worn many hats: solo builder, collaborator,",
  "tech lead, problem solver. In every role, I’ve brought",
  "curiosity, calmness under pressure, and a mindset",
  "that sees systems, not silos.",
  "",
  "I believe in:",
  "• Writing code people can read",
  "• Designing flows people can feel",
  "• Building products people will remember"
]
</script>



<style scoped>
.typing-line {
  text-shadow: 0 0 4px #00ff66, 0 0 8px #00ff66;
  line-height: 1.8rem;
  background: repeating-linear-gradient(transparent 0px, transparent 3px, rgba(0,255,0,0.05) 3px, rgba(0,255,0,0.05) 6px);
}
</style>
