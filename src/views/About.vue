<template>

    <div v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
    >
        <div class="pt-10 md:flex md:space-between">
            <div class="md:w-5/6 mb-5 md:mr-20">
                <p class="text-3xl font-semibold mb-10">Cheese lover. Tetris player. Fast typer. And much more.</p>
                <p class="text-xl mb-5">Hello there — thanks for checking out my website!</p>
                <p class="text-xl mb-5">My name is Roselyn Huynh (pronounced rose-lyn who-in)! I am currently a
                    <a href="https://uwaterloo.ca/systems-design-engineering/" target="_blank" class="underline decoration-indigo-300 font-semibold">Systems Design Engineering</a> student at the University of Waterloo with an expected graduation date in April of 2026.</p>
                <p class="text-xl mb-5">I'm a creative designer with an interest in the technical side of things, and I love finding innovative solutions to mundane problems. Previously, I've developed cool things with the <a href="https://www.canada.ca/en.html" target="_blank" class="underline decoration-indigo-300 font-semibold">Government of Canada</a> and <a href="https://uvaro.com/" target="_blank" class="underline decoration-indigo-300 font-semibold">Uvaro</a>!</p>
                <p class="text-xl mb-10">On campus, you can find me playing the alto saxophone with
                    <a href="https://uwcbc.uwaterloo.ca/" target="_blank" class="underline decoration-indigo-300 font-semibold">UW Concert Band Club</a>, representing my class with the 
                    <a href="https://www.engsoc.uwaterloo.ca/" target="_blank" class="underline decoration-indigo-300 font-semibold">Engineering Society</a>, or hosting events with
                    <a href="http://www.fashionforchange.ca/" target="_blank" class="underline decoration-indigo-300 font-semibold">Fashion for Change</a>!</p>
                <p class="text-xl italic mb-10">Feel free to send me your Spotify playlists or nerd out about the stars with me — let's start a conversation! ✨</p>
                <a href="mailto:roselyn.huynh@uwaterloo.ca"><button class="text-xl font-semibold border-indigo-300 border-2 rounded bg-white hover:bg-indigo-300 hover:text-white transition ease-in-out drop-shadow-xl py-2 px-5 mb-5">Send me a message!</button></a>
            </div>
            <div class="mb-5">
                <img src="../assets/colourrun.png" class="w-full md:w-96 mb-5">
                <img src="../assets/shiba.png" class="w-full md:w-96">
            </div>
        </div>
    </div>

</template>