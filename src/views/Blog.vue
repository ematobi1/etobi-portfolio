<template>
  <section class="blog-page">
    <h2>Latest Posts</h2>
    <p class="lead">Thoughts, tutorials, and discoveries from the trenches of full-stack development.</p>
    <div class="grid">
      <BlogCard v-for="post in posts" :key="post.slug" :post="post" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BlogCard from '../components/BlogCard.vue'
import { blogPosts, fetchPosts } from '../composables/useBlog'
import { blogPosts as fallbackPosts } from '../data/blog'

// Show the bundled posts if Firestore is unreachable or empty.
fetchPosts().catch((err) => console.warn('Could not load posts from Firestore:', err))
const posts = computed(() => (blogPosts.value.length ? blogPosts.value : fallbackPosts))
</script>

<style scoped>
.blog-page {
  padding: 2rem;
}
.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.lead {
  font-style: italic;
  margin-bottom: 1.5rem;
  color: #aaa;
}
</style>
