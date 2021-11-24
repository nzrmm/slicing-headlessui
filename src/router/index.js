import { createWebHistory, createRouter } from "vue-router";
import Feature from '../views/Feature.vue';

const routes = [
    {
        path : '/',
        name : 'React',
        component : Feature,
        props : true
    },
    {
        path : '/vue',
        name : 'Vue',
        component : Feature,
        props : true
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;