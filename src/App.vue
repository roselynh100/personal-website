<script setup>
import NavBar from './components/NavBar.vue'
import Home from './views/Home.vue'
import Footer from './components/Footer.vue'

const routes = [
    {name: "Home", to: "/"},
    {name: "About", to: "/about"}
]
</script>

<template>

    <div class="h-screen md:scrollbar-thin md:scrollbar-thumb-indigo-300" id="app">
        
        <div class="container mx-auto bg-slate-0 max-w-5xl px-10 selection:bg-indigo-300 selection:text-white">

            <nav>
                <div class="flex py-5 items-center">
                    <router-link to="/"><img src="./assets/cloud.png" class="h-14 md:h-20"></router-link>
                    <div class="flex text-xl grow justify-end">
                        <router-link v-for="route in routes" :to="route.to" class="hover:underline decoration-indigo-300 decoration-4 ml-10">
                            {{route.name}}
                        </router-link>
                        <a href="https://drive.google.com/file/d/1LLHgTjFQ4c_P6JZcs035xbDp771KYlde/view" class="hover:underline decoration-indigo-300 decoration-4 ml-10" target="_blank">Resume</a>
                    </div>
                </div>
            </nav>

            <main>
                <router-view v-slot="{ Component }">
                    <!-- <transition name="fade" mode="out-in"> -->
                        <component :is="Component" />
                    <!-- </transition> -->
                </router-view>
                <Footer />
            </main>
        
        </div>

    </div>

</template>