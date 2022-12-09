<template>
    <div class="md:w-[calc(50%-3rem)] mb-10 bg-white border-indigo-300 border-2 rounded-lg hover:drop-shadow-2xl">
        <img :src="image" class="object-cover rounded-md">
        <div class="px-10 py-5">
            <div class="flex items-center mb-2">
                <p class="text-2xl font-bold mr-3">{{name}}</p>
                <div class="flex">
                    <p v-if="extra" class="text-md mr-2">🏆</p>
                    <p v-if="extra" class="text-sm text-white font-semibold bg-indigo-300 px-1 py-0.5 rounded">{{extra}}</p>
                </div>
            </div>
            <p class="italic mb-2">{{tagline}}</p>
            <a :href="code" target="_blank"><button v-if="props.code" class="font-semibold border-indigo-300 border-2 rounded bg-white hover:bg-indigo-300 hover:text-white drop-shadow-xl py-1 px-5 my-5 mr-5">Code</button></a>
            <a :href="demo" target="_blank"><button v-if="props.demo" class="font-semibold border-indigo-300 border-2 rounded bg-white hover:bg-indigo-300 hover:text-white drop-shadow-xl py-1 px-5 my-5 mr-5">Demo</button></a>
        </div>
    </div>

</template>

<script setup>

let props = defineProps({
    name: {type: String, default: "Project Name"},
    tagline: {type: String, default: "Project Tagline"},
    time: {type: String, default: "Time"},
    image: {type: String, default: "https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/7f2dae36-5650-4b84-b184-684f46fe68aa/98.jpg"},
    extra: {type: String},
    router: {type: String},
    demo: {type:String},
    code: {type:String}
})

</script>