<template>
  <section class="admin-page">
    <h2>✍️ Admin Panel</h2>
    <div v-if="user">
      <p>Welcome, {{ user.email }}!</p>
      <form @submit.prevent="submitPost">
        <input v-model="title" placeholder="Post Title" required />
        <textarea v-model="content" placeholder="Post Content" required />
        <button type="submit">Publish</button>
      </form>
    </div>
    <div v-else>
      <LoginForm />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { auth } from '../../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { db } from '../../firebase/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import LoginForm from '../../components/LoginForm.vue'

const user = ref(null)
const title = ref('')
const content = ref('')

onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    user.value = u
  })
})

const submitPost = async () => {
  await addDoc(collection(db, 'blogPosts'), {
    title: title.value,
    content: content.value,
    createdAt: Timestamp.now()
  })
  title.value = ''
  content.value = ''
  alert('Post published!')
}
</script>

<style scoped>
.admin-page {
  padding: 2rem;
  max-width: 700px;
  margin: auto;
}
input, textarea {
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
}
button {
  background: #000;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
}
</style>
