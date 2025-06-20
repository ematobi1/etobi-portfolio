import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Blog from '@/views/Blog.vue'
import BlogDetail from '@/views/BlogDetail.vue'
import Contact from '@/views/Contact.vue'
import Admin from '@/views/admin/Admin.vue'

import { getAuth, onAuthStateChanged } from "firebase/auth"

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/blog/:slug', name: 'BlogDetail', component: BlogDetail },
  { path: '/contact', name: 'Contact', component: Contact },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _from, next) => {
  const auth = getAuth()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (!requiresAuth) {
    next()
    return
  }

  const unsubscribe = onAuthStateChanged(auth, user => {
    unsubscribe()
    if (user) {
      next()
    } else {
      next('/')
    }
  })
})

export default router
