<template>
  <div class="post-page" v-if="post">
    <h1>{{ post.title }}</h1>
    <img :src="post.image" v-if="post.image" />
    <p>{{ post.excerpt }}</p>
  </div>
  <div class="post-page" v-else-if="loaded">
    <h2>Post not found</h2>
    <router-link to="/blog">Back to blog</router-link>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getPostBySlug } from '../composables/useBlog'
import { blogPosts as fallbackPosts } from '../data/blog'

const route = useRoute()
const post = ref<any>(null)
const loaded = ref(false)

onMounted(async () => {
  const slug = route.params.slug as string
  try {
    post.value = await getPostBySlug(slug)
  } catch (err) {
    console.warn('Could not load post from Firestore:', err)
  }
  post.value ??= fallbackPosts.find((p) => p.slug === slug) ?? null
  loaded.value = true
})
</script>

<style scoped>
.post-page {
  padding: 2rem;
}
img {
  max-width: 100%;
  border-radius: 8px;
  margin: 1rem 0;
}
</style>
