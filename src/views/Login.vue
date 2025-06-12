<template>
  <div class="login-page">
    <h2>Sign In</h2>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" type="email" required />
      <input v-model="password" placeholder="Password" type="password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function login() {
  alert(`Logging in as ${email.value}`)
  // TODO: Connect to Firebase or backend auth
}
</script>

<style scoped>
.login-page {
  padding: 2rem;
  max-width: 400px;
  margin: auto;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
input {
  padding: 0.75rem;
  border-radius: 8px;
  border: none;
}
button {
  background: yellow;
  color: black;
  padding: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
}
</style>
