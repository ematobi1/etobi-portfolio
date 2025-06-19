<template>
  <MatrixCanvas />
  <TypingMatrix :lines="lines" />
</template>

<script setup>
import TypingMatrix from '@/components/TypingMatrix.vue'
import MatrixCanvas from '@/components/MatrixCanvas.vue'

const lines = [
  "🛠️ Projects",
  "Software That Doesn’t Just Work — It Resonates",
  "Every project I build is rooted in purpose — not just to launch,",
  "but to lead. Here’s a glimpse into the kind of thinking and",
  "execution I bring to the table:",
  "Etobi CRM Dashboard",
  "A fast, flexible, and real-time dashboard built to help teams",
  "see their data clearly and act decisively. Designed with",
  "adaptability in mind — from admins to analysts.",
  "MusicTuneUp DJ Studio",
  "An AI-powered studio for DJs and creators to remix, refine,",
  "and reimagine their sound. Where music meets machine",
  "learning, wrapped in a smooth, responsive UI.",
  "TaskPilot SaaS",
  "A smart productivity suite for small teams, designed to reduce",
  "friction, boost focus, and bring clarity to collaboration.",
  "Each of these projects represents a different kind of challenge —",
  "and a deeper commitment to design, performance, and people."
]
</script>



<style scoped>
.typing-line {
  text-shadow: 0 0 4px #00ff66, 0 0 8px #00ff66;
  line-height: 3;
  background: repeating-linear-gradient(
    transparent 0px,
    transparent 3px,
    rgba(0, 255, 0, 0.05) 3px,
    rgba(0, 255, 0, 0.05) 6px
  );
}
</style>
