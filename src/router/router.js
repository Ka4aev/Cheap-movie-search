import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { name: 'home', path: '/', component: () => import('@/views/HomeView.vue')},
    { name: 'movie', path: '/movie/:id', component: () => import('@/views/MovieView.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router