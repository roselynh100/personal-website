<template>

    <div class="flex py-5 items-center">

        <img src="../assets/cloud.png" class="h-14 md:h-20">

        <div class="flex text-xl grow justify-end">

            <router-link v-for="item in navBar" class="hover:underline decoration-indigo-300 decoration-4 ml-10">
                {{item.name}}
            </router-link>

        </div>
        
    </div>

</template>

<script setup>

const navBar = [
    {name: "Home", router: "/"},
    {name: "About", router: "/about"},
    {name: "Resume", router: "https://drive.google.com/file/d/1LLHgTjFQ4c_P6JZcs035xbDp771KYlde/view", newTab: true}
]

</script>