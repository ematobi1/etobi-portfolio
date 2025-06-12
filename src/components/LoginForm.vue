<template>
  <form @submit.prevent="login">
    <input v-model="email" placeholder="Email" type="email" required />
    <input v-model="password" placeholder="Password" type="password" required />
    <button type="submit">Login</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'

const email = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
  } catch (err) {
    error.value = 'Invalid login.'
  }
}
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
}
button {
  background: yellow;
  color: black;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
}
.error {
  color: red;
  margin-top: 0.5rem;
}
</style>
