<template>

    <div>
        <p class="text-3xl font-semibold mb-10">Projects</p>
        <div class="flex flex-col md:flex-row flex-wrap justify-between">
            <ProjectCard v-for="project in projects" :name="project.name" :tagline="project.tagline" :time="project.time" :extra="project.extra" :image="project.image" :router="project.router" />
        </div>
    </div>

</template>

<script setup>

import ProjectCard from './ProjectCard.vue'

const projects = [
    {name: "Bandstory", tagline: "Documenting my high school music career", time: "SEPTEMBER 2021", image: "https://roselyn-huynh.me/static/cf70d1908feb3b684e8dc87cadc0341b/321c5/bandstory.png", router: "/bandstory"},
    {name: "Listry", tagline: "Saving customers time while grocery shopping", time: "MARCH - MAY 2022", extra: "WINNER OF TECH UNDER 20 CUP 2022", image: "https://roselyn-huynh.me/static/a32db5a298d48f522355908e825ce040/24630/listry.png", router: "/listry"},
    {name: "Moon-Bound Connection", tagline: "Implementing interactivity to songs that have meaning to me", time: "JULY 2021", image: "https://roselyn-huynh.me/static/bd17166fab959ea344cecfb5128979d0/321c5/mbc.png", router: "/moonboundconnection"},
    {name: "Story Generator", tagline: "Creating ideas to combat writer's blocks", time: "MAY 2022", image: "", router: "/storygenerator"},
    // {name: "", tagline: "", time: "", image: ""}

]

</script>