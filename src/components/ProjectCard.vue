<template>

    <div class="md:w-[calc(50%-3rem)] mb-10 bg-white border border-indigo-300 border-2 rounded-lg cursor-pointer hover:drop-shadow-xl">
        <img :src="image" class="object-cover">
        <div class="px-10 py-5">
            <div class="flex items-center mb-2">
                <p class="text-2xl font-bold mr-3">{{name}}</p>
                <p v-if="extra" class="text-sm text-white font-semibold bg-indigo-300 px-1 py-0.5 rounded">{{extra}}</p>
            </div>
            <p class="italic mb-2">{{tagline}}</p>
            <p class="text-sm">{{time}}</p>
        </div>
    </div>

</template>

<script setup>

let props = defineProps({
    name: {type: String, default: "Project Name"},
    tagline: {type: String, default: "Project Tagline"},
    time: {type: String, default: "Time"},
    image: {type: String, default: "https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/7f2dae36-5650-4b84-b184-684f46fe68aa/98.jpg"},
    extra: {type: String}
})

</script>