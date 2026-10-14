import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Blog from '@/views/Blog.vue'
import BlogDetail from '@/views/BlogDetail.vue'
import Contact from '@/views/Contact.vue'
import AdminBlog from '@/views/AdminBlog.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/blog/:slug', name: 'BlogDetail', component: BlogDetail },
  { path: '/contact', name: 'Contact', component: Contact },
  // AdminBlog shows a sign-in prompt until the user is authenticated;
  // Firestore rules restrict writes to the site owner.
  { path: '/admin', name: 'Admin', component: AdminBlog },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
