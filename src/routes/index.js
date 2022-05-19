import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
    {
        path: '/',
        name: 'home',
        meta: {},
        component: () => import('../views/Home.vue')
    },

    {
        path: '/foto-do-dia',
        name: 'foto-do-dia',
        meta: {},
        component: () => import('../views/FotoDoDia.vue')
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})