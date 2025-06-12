<template>
  <canvas id="matrix"></canvas>
  <div class="app">
<nav class="navbar">
  <img src="/TLOGO.jpg" alt="Etobi Logo" class="passport-logo" />
  <div class="nav-links">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
</nav>

    <transition name="fade-slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
import './assets/rainbowMatrix'
</script>


<style scoped>
.navbar {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 1rem;
  gap: 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.75rem;
  color: #00ff66;
}

.nav-links a {
  color: #00ff66;
  text-shadow: 0 0 4px #00ff66, 0 0 8px #00ff66;
  text-decoration: none;
  position: relative;
  animation: matrixNavFade 0.6s ease-in-out forwards;
  opacity: 0;
}

.nav-links a:nth-child(1) { animation-delay: 0s; }
.nav-links a:nth-child(2) { animation-delay: 0.5s; }
.nav-links a:nth-child(3) { animation-delay: 1s; }
.nav-links a:nth-child(4) { animation-delay: 1.5s; }
.nav-links a:nth-child(5) { animation-delay: 2s; }

@keyframes matrixNavFade {
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}

.router-link-exact-active {
  border-bottom: 2px solid #00ff66;
}
.passport-logo {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 0 6px #00ff66;
  margin-bottom: 1rem;
  z-index: 3;
}
</style>
