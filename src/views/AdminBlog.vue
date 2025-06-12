<template>
  <div v-if="auth.user" class="admin-blog">
    <h2>Manage Blog Posts</h2>
    <form @submit.prevent="submitPost">
      <input v-model="form.title" placeholder="Post title" required />
      <input v-model="form.image" placeholder="Image URL" />
      <input v-model="form.slug" placeholder="Slug" required />
      <textarea v-model="form.excerpt" placeholder="Excerpt" required></textarea>
      <button type="submit">Save</button>
    </form>
  </div>
  <div v-else class="login-required">
    <h2>Please sign in to edit blog posts.</h2>
    <button @click="auth.loginWithGoogle()">Login with Google</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useAuth } from '../composables/useAuth'

const auth = useAuth()

const form = ref({
  title: '',
  excerpt: '',
  image: '',
  slug: ''
})

async function submitPost() {
  await addDoc(collection(db, 'blogPosts'), form.value)
  alert('Post saved to Firestore!')
}
</script>

<style scoped>
.admin-blog {
  max-width: 600px;
  margin: auto;
  padding: 2rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.login-required {
  padding: 2rem;
  text-align: center;
}
</style>
