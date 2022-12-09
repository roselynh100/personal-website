<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

</script>

<template>

    <div class="h-screen md:scrollbar-thin md:scrollbar-thumb-indigo-300" id="app">
        
        <div class="container mx-auto bg-slate-0 max-w-5xl px-10 selection:bg-indigo-300 selection:text-white">

            <NavBar />

            <main>
                <router-view v-slot="{ Component }">
                    <component :is="Component" />
                </router-view>
                <Footer />
            </main>
        
        </div>

    </div>

</template>