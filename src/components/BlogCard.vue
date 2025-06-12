<template>
  <div class="blog-card">
    <img :src="post.image" alt="thumbnail" />
    <h3>{{ post.title }}</h3>
    <p>{{ post.excerpt }}</p>
    <router-link :to="'/blog/' + post.slug">Read More</router-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  post: {
    title: string
    excerpt: string
    image: string
    slug: string
  }
}>()
</script>

<style scoped>
.blog-card {
  background: rgba(255,255,255,0.05);
  padding: 1rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
}
.blog-card:hover {
  transform: translateY(-5px);
}
.blog-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}
</style>
