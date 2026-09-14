import { createRouter, createWebHistory } from 'vue-router'

import Inicio from './views/index.vue'
import Area from './views/area.vue'

const routes = [
    {
        path: '/',
        component: Inicio
    },
    {
        path: '/area',
        component: Area
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router