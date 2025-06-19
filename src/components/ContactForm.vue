<template>
  <form @submit.prevent="sendEmail" class="contact-form">
    <label>
      Name:
      <input v-model="form.name" type="text" required />
    </label>
    <label>
      Email:
      <input v-model="form.email" type="email" required />
    </label>
    <label>
      Message:
      <textarea v-model="form.message" required></textarea>
    </label>
    <button type="submit">Send</button>
    <p v-if="status">{{ status }}</p>
  </form>
</template>

<script setup>
import emailjs from 'emailjs-com'
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})
const status = ref('')

const sendEmail = () => {
  emailjs.send(
    'emma.tobi1@gmail.com',        // Service ID
    'template_6p1w9oe',            // Template ID
    {
      from_name: form.value.name,
      from_email: form.value.email,
      message: form.value.message
    },
    'zeNBr8qUQZZpCyrwm'            // Public key
  ).then(() => {
    status.value = 'Message sent successfully!'
    form.value = { name: '', email: '', message: '' }
  }).catch((error) => {
    console.error('EmailJS error:', error)
    status.value = 'Failed to send message.'
  })
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  gap: 2rem;
  color: white;
}
input, textarea {
  padding: 1rem;
  border-radius: 5px;
  border: line-width 1px solid #00ffff;
}
button {
  padding: 1.5rem;
  background-color: #00ffff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
}
</style>
