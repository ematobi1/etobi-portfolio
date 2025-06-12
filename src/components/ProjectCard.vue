<template>
  <div class="card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <a :href="project.link" target="_blank">View Project</a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    title: string
    description: string
    link: string
  }
}>()
</script>

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);
}
.card a {
  color: yellow;
  text-decoration: underline;
}
</style>
