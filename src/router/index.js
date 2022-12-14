import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import FunStuff from '../views/FunStuff.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/funstuff',
        name: 'Fun Stuff',
        component: FunStuff
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router