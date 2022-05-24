<template>

    <div class="mb-5">

        <p class="mb-3">Designed and developed by Roselyn Huynh 2022</p>
        <a v-for="icon in icons" :href="icon.link" target="_blank">
            <i :class="'mr-5 fa-xl ' + icon.name"></i>
        </a>

    </div>

</template>

<script setup>

const icons = [
    {name: "fa-regular fa-envelope", link: "mailto:roselyn.huynh@uwaterloo.ca"},
    {name: "fa-brands fa-linkedin", link: "https://www.linkedin.com/in/roselynhuynh/"},
    {name: "fa-brands fa-github", link: "https://github.com/roselynh100"},

]

</script>