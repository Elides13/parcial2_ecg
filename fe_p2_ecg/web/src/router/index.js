import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AllSeries from '../views/AllSeries.vue'
import CreateSerie from '../views/CreateSerie.vue'
import formActualizar from '../views/FormActualizar.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/series',
        name: 'AllSeries',
        component: AllSeries
    },
    {
        path: '/CreateSerie',
        name: 'CreateSerie',
        component: CreateSerie
    },
    {
        path: '/formActualizar/:id',
        name: 'formActualizar',
        component: formActualizar
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router