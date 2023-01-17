<template>

    <nav>
        <div class="flex py-5 items-center">
            <router-link to="/"><img src="../assets/cloud.png" class="invisible sm:visible h-14 md:h-20"></router-link>
            <div class="flex text-xl grow justify-end">
                <router-link v-for="route in routes" :to="route.to" class="hover:underline decoration-wavy decoration-indigo-300 decoration-2 ml-10">
                    {{route.name}}
                </router-link>
                <a href="https://drive.google.com/file/d/1ULXEtL28BBoNuffCDTv8LFWHNqkgpB9f/view?usp=sharing" class="hover:underline decoration-wavy decoration-indigo-300 decoration-2 ml-10" target="_blank">Resume</a>
            </div>
        </div>
    </nav>

</template>

<script setup>

const routes = [
    {name: "Home", to: "/"},
    {name: "About", to: "/about"},
    {name: "Fun Stuff", to: "/funstuff"}
]


</script>