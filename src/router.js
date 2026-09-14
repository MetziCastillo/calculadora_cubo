import { createRouter, createWebHistory } from 'vue-router'

import Inicio from './views/index.vue'
import Area from './views/area.vue'
import Perimetro from './views/perimetro.vue'

const routes = [
    {
        path: '/',
        component: Inicio
    },
    {
        path: '/area',
        component: Area
    },
    {
        path: '/perimetro',
        component: Perimetro
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router