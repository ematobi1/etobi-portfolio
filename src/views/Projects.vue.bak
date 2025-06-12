<template>
  <section class="projects-page">
    <h2>Featured Projects</h2>
    <div class="grid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'
</script>

<style scoped>
.projects-page {
  padding: 2rem;
  max-width: 1100px;
  margin: auto;
}

.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
</style>
