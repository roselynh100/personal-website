import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

import Bandstory from '../views/Bandstory.vue'
import Listry from '../views/Bandstory.vue'
import Moonboundconnection from '../views/Bandstory.vue'
import StoryGenerator from '../views/Bandstory.vue'


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
        path: '/bandstory',
        name: 'Bandstory',
        component: Bandstory
    },
    {
        path: '/listry',
        name: 'Listry',
        component: Listry
    },
    {
        path: '/moonboundconnection',
        name: 'Moonboundconnection',
        component: Moonboundconnection
    },
    {
        path: '/storygenerator',
        name: 'Story Generator',
        component: StoryGenerator
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router