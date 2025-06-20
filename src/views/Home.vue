<template>
  <section class="terminal">
    <div class="cli-text">
      <p
        v-for="(line, index) in lines"
        :key="index"
        :class="['fade-line', line.class]"
        :style="{ animationDelay: (index * 0.3) + 's' }"   GOOD

        v-html="line.text"
      />
      <span class="cursor">█</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

onMounted(() => {
  document.title = 'Emmanuel Tobi | Full-Stack Developer & Creative Technologist'
})

const lines = ref([
  { text: '<span class="headline">Crafting Scalable Digital Experiences with Precision, Passion, and Purpose</span>', class: 'header' },
  { text: '', class: '' },
  { text: 'Welcome to the digital playground of Emmanuel Tobi — a visionary full-stack developer, UI/UX advocate, and relentless builder of impactful software solutions.', class: 'body' },
  { text: 'Driven by a passion for elegant design and robust architecture, Tobi transforms complex challenges into seamless, scalable experiences that empower businesses and delight users.', class: 'body' },
  { text: '', class: '' },
  { text: 'With deep expertise spanning frontend artistry, backend engineering, and intelligent automation, Tobi approaches every project with a systems mindset and an unyielding commitment to quality.', class: 'body' },
  { text: 'Whether architecting real-time applications, optimizing user journeys, or integrating cutting-edge AI, the goal is always the same:', class: 'body' },
  { text: 'to build technology that’s not just functional, but meaningful.', class: 'body' },
  { text: '', class: '' },
  { text: 'Dive into a portfolio where innovation meets craftsmanship, and let’s create the future of digital experiences together.', class: 'body' }
])
</script>

<style scoped>
.terminal {
  background-color: #000;
  color: #00ffcc;
  font-family: 'Courier New', monospace;
  padding: 100px 80px;
  border-radius: 10px;
  max-width: 950px;
  margin: auto;
  white-space: pre-wrap;
  text-align: center;
}

.cli-text p {
  margin: 0 0 15px 0 0 15;
  line-height: 3.4;
  opacity: 0;
}

.fade-line {
  animation: fadeIn 0.5s forwards;
}

.headline {
  font-size: 8rem;
  font-weight: 1000;
  color: #39ff14;
  text-shadow: 0 0 8px #39ff14, 0 0 12px #2aff2a;
  margin-bottom: 20px;
}

.cursor {
  display: inline-block;
  color: #00ffcc;
  animation: blink 1s step-start infinite;
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: 4px;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
  from {
    opacity: 0;
    transform: translateY(15px);
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
