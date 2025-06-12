<template>
  <div class="post-page" v-if="post">
    <h1>{{ post.title }}</h1>
    <img :src="post.image" v-if="post.image" />
    <p>{{ post.excerpt }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getPostBySlug } from '../composables/useBlog'

const route = useRoute()
const post = ref<any>(null)

onMounted(async () => {
  post.value = await getPostBySlug(route.params.slug as string)
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
