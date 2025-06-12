<template>
  <div class="matrix-bg">
    <p v-for="(line, i) in lines" :key="i" class="typing-line">{{ typedLines[i] }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  lines: {
    type: Array,
    required: true
  }
})

const typedLines = ref(props.lines.map(() => ''))

onMounted(() => {
  props.lines.forEach((line, i) => {
    setTimeout(() => {
      let current = ''
      let j = 0
      const interval = setInterval(() => {
        current += line[j]
        typedLines.value[i] = current
        j++
        if (j >= line.length) clearInterval(interval)
      }, 30)
    }, i * 600)
  })
})
</script>
