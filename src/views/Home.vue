<template>

    <div v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }">
        <Opening />
        <Projects />
    </div>

</template>

<script setup>

import Opening from '../components/Opening.vue'
import Projects from '../components/Projects.vue'

</script>