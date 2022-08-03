<template>

    <div class="mb-5">

        <p class="mb-3">Designed and developed with 💜 by Roselyn Huynh</p>
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
    {name: "fa-brands fa-spotify", link: "https://open.spotify.com/user/roselynh100?si=929d34d11afa4619"}

]

</script>