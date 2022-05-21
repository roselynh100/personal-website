<template>

    <div class="flex">

        <p class="bg-red-300">hi</p>

        <div class="flex text-xl bg-sky-300 grow justify-end">

            <a v-for="item in navBar" :href="item.router" class="hover:underline decoration-indigo-300 decoration-4 ml-10">
                {{item.name}}
            </a>

        </div>
        
    </div>

</template>

<script setup>

const navBar = [
    {name: "Home", router: ""},
    {name: "About", router: ""},
    {name: "Resume", router: "https://drive.google.com/file/d/1LLHgTjFQ4c_P6JZcs035xbDp771KYlde/view"}
]

</script>