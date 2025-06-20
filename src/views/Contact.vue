<template>
  <section class="contact">
    <h1>Send Me a Message </h1>

    <form @submit.prevent="sendEmail">
      <input v-model="name" type="text" placeholder="Your Name" required />
      <input v-model="email" type="email" placeholder="Your Email" required />
      <textarea v-model="message" placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send</button>
    </form>

    <p v-if="success" class="success">✅ Message sent successfully!</p>
    <p v-if="error" class="error">❌ Failed to send message. Try again.</p>

    <div class="contact-info">
      <a :href="mailto" class="invisible-link">Email Me</a>
      <a href="https://www.linkedin.com/in/emmanuel-t-52a040118" target="_blank">LinkedIn</a>
      <a href="https://github.com/ematobi1" target="_blank">GitHub</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const name = ref('')
const email = ref('')
const message = ref('')

const success = ref(false)
const error = ref(false)

const mailto = 'mailto:emma.tobi1@gmail.com'

const sendEmail = async () => {
  success.value = false
  error.value = false

  const params = {
    from_name: name.value,
    from_email: email.value,
    message: message.value,
  }

  try {
    await emailjs.send(
      'emma.tobi1@gmail.com',       // Service ID (yes, EmailJS lets you use an email as ID)
      'template_6p1w9oe',           // Template ID
      params,
      'zeNBr8qUQZZpCyrwm'           // Public Key
    )

    success.value = true
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (err) {
    error.value = true
    console.error('EmailJS error:', err)
  }
}
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input, textarea {
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: #4d3737e3;
  color: #bfb7c9;
}

button {
  background-color: #00ffcc;
  color: #926464d8;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
}

.success {
  color: #83ad9c;
  margin-top: 10px;
}
.error {
  color: #ff4444;
  margin-top: 10px;
}

.contact-info {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.invisible-link {
  display: none;
}
</style>
