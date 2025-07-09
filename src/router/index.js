import { createRouter, createWebHistory } from 'vue-router'
import Bienvenida from '../views/Bienvenida.vue'
import Blog from '../views/Blog.vue'
import Articulos from '../views/Articulos.vue'

const routes = [
  { path: '/', name: 'Bienvenida', component: Bienvenida },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/blog/:id', name: 'Articulos', component: Articulos }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
