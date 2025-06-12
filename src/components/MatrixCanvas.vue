<template>
  <canvas ref="canvas" class="matrix-canvas"></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const canvas = ref()

onMounted(() => {
  const c = canvas.value
  const ctx = c.getContext('2d')

  function resizeCanvas() {
    c.width = window.innerWidth
    c.height = window.innerHeight
  }

  window.addEventListener('resize', resizeCanvas)
  resizeCanvas()

  const letters = Array(256).join("アカサタナ0123456789ZXCVBNM").split("")
  const fontSize = 14
  let columns, drops

  function setupDrops() {
    columns = Math.floor(c.width / fontSize)
    drops = Array(columns).fill(1)
  }

  setupDrops()

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
    ctx.fillRect(0, 0, c.width, c.height)
    ctx.fillStyle = "#00ff66"
    ctx.font = fontSize + "px monospace"

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)]
      ctx.fillText(text, i * fontSize, drops[i] * fontSize)
      if (drops[i] * fontSize > c.height && Math.random() > 0.975) drops[i] = 0
      drops[i]++
    }
  }

  setInterval(draw, 33)
})
</script>

<style scoped>
.matrix-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
}
</style>
