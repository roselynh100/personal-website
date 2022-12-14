<template>

    <div v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
    >

        <p class="pt-10 text-3xl font-semibold mb-3">Fun Stuff</p>
        <p class="text-xl italic mb-10">A collection of miscellaneous projects I've made across the years</p>
            <div class="flex flex-col md:flex-row flex-wrap justify-between">
                <ProjectCard v-for="project in projects" :name="project.name" :tagline="project.tagline" :time="project.time" :extra="project.extra" :won="project.won" :image="project.image" :demo="project.demo" :code="project.code" />
            </div>


    </div>

</template>

<script setup>

import ProjectCard from '../components/ProjectCard.vue'
import kohi from '../assets/kohi.png'
import healthscreener from '../assets/healthscreener.png'
import studysafe from '../assets/studysafe.png'
import funkybot from '../assets/funkybot.png'
import taskmarket from '../assets/taskmarket.png'
import portalplus from '../assets/portalplus.png'

const projects = [
    {name: "KoHi", tagline: "Connecting individuals over an e-cup of coffee", extra: "TECHNOVA 2022", won: true, image: kohi, demo: "https://devpost.com/software/kohi", code: ""},
    {name: "Task Market", tagline: "Rewarding users for prioritizing mental health", extra: "HACK THE VALLEY 7", image: taskmarket, demo: "https://devpost.com/software/task-market", code: ""},
    {name: "Portal+", tagline: "Reimagining uWaterloo's student app", image: portalplus, demo: "", code: ""},
    {name: "Study Safe", tagline: "Eliminating theft from students on campus", image: studysafe, demo: "", code: ""},
    {name: "Health Screener", tagline: "Helping hospitals diagnose patients", extra: "WEC '22", won: true, image: healthscreener, demo: "https://wec-programming-spring-2022.web.app/", code: "https://github.com/roselynh100/health-screener"},
    {name: "Funkybot", tagline: "My personal Discord bot", image: funkybot, demo: "https://youtu.be/jzd7p1F9sto", code: ""}
]

</script>