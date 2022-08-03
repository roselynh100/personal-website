<template>

    <div>
        <p class="text-3xl font-semibold mb-10">Projects</p>
        <div class="flex flex-col md:flex-row flex-wrap justify-between">
            <ProjectCard v-for="project in projects" :name="project.name" :tagline="project.tagline" :time="project.time" :extra="project.extra" :image="project.image" :demo="project.demo" :code="project.code" />
        </div>
    </div>

</template>

<script setup>

import ProjectCard from './ProjectCard.vue'
import bandstory from '../assets/bandstory.png'
import listry from '../assets/listry.png'
import healthscreener from '../assets/healthscreener.png'
import moonboundconnection from '../assets/moonboundconnection.png'

const projects = [
    {name: "Bandstory", tagline: "Documenting my high school music career", time: "SEPTEMBER 2021", image: bandstory, demo: "https://bandstory.netlify.app/", code: "https://github.com/roselynh100/bandstory"},
    {name: "Listry", tagline: "Saving customers time while grocery shopping", time: "MARCH - MAY 2022", extra: "WINNER OF TECH UNDER 20 CUP '22", image: listry, demo: "", code: "https://github.com/roselynh100/listry"},
    {name: "Health Screener", tagline: "Creating ideas to combat writer's blocks", time: "JULY 2022", extra: "WINNER OF WEC '22", image: healthscreener, demo: "https://wec-programming-spring-2022.web.app/", code: "https://github.com/roselynh100/health-screener"},
    {name: "Moon-Bound Connection", tagline: "Implementing interactivity to songs that have meaning to me", time: "JULY 2021", image: moonboundconnection, demo: "https://moon-bound-connection.netlify.app/", code: "https://github.com/roselynh100/moon-bound-connection"},
    // {name: "", tagline: "", time: "", image: ""}

]

</script>