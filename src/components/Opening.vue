<template>

    <div class="py-10 pt-10 md:py-20 text-slate-800" id="openingDiv">

        <p class="text-4xl font-semibold mb-5">Hi! The name's</p>
        <p class="text-7xl md:text-8xl lg:text-9xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-fuchsia-700 mb-10">Roselyn Huynh.</p>
        <p class="text-xl md:text-2xl font-semibold">I'm a curious front-end developer studying Systems Design Engineering at the University of Waterloo.</p>

    </div>

    <!-- <button @click="setHeight()">hello</button> -->

</template>

<script setup>

let windowHeight = window.innerHeight;

function setHeight() {
    console.log(document.getElementById("openingDiv"));
    console.log(windowHeight);
    let calcWindowHeight = windowHeight - 50;
    document.getElementById("openingDiv").classList.add("h-[]");
}

</script>

<style scoped>

.screenSize {
    height: windowHeight - 50px;
}

</style>