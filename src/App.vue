<script setup>
import NavBar from './components/NavBar.vue'
import Home from './views/Home.vue'
import Footer from './components/Footer.vue'
</script>

<template>

    <div class="container mx-auto bg-slate-0 max-w-5xl px-10 selection:bg-indigo-300 selection:text-white" id="app">

        <nav>
            <div class="flex py-5 items-center">
                <router-link to="/"><img src="./assets/cloud.png" class="h-14 md:h-20"></router-link>
                <div class="flex text-xl grow justify-end">
                    <router-link to="/" class="hover:underline decoration-indigo-300 decoration-4 ml-10">Home</router-link>
                    <router-link to="/about" class="hover:underline decoration-indigo-300 decoration-4 ml-10">About</router-link>
                    <a href="https://drive.google.com/file/d/1LLHgTjFQ4c_P6JZcs035xbDp771KYlde/view" class="hover:underline decoration-indigo-300 decoration-4 ml-10" target="_blank">Resume</a>
                </div>
            </div>
        </nav>

        <main>
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
            <Footer />
        </main>

    </div>

</template>