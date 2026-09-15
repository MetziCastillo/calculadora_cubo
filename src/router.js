import { createRouter, createWebHistory } from 'vue-router'

import Inicio from './views/index.vue'
import Area from './views/area.vue'
import Perimetro from './views/perimetro.vue'
import Volumen from './views/volumen.vue'

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
    },
    {
        path: '/volumen',
        component: Volumen
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
