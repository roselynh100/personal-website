<template>
	<nav>
		<div class="flex py-5 items-center">
			<router-link to="/"
				><img
					src="../assets/cloud.png"
					class="invisible sm:visible h-14 md:h-20"
			/></router-link>
			<div class="flex text-xl grow justify-end">
				<router-link
					v-for="route in routes"
					:to="route.to"
					class="hover:underline decoration-wavy decoration-indigo-300 decoration-2 ml-10"
				>
					{{ route.name }}
				</router-link>
				<button
					@click="openResume"
					class="hover:underline decoration-wavy decoration-indigo-300 decoration-2 ml-10"
				>
					Resume
				</button>
			</div>
		</div>
	</nav>
</template>

<script setup>
	const routes = [
		{ name: 'Home', to: '/' },
		{ name: 'About', to: '/about' },
		{ name: 'Fun Stuff', to: '/funstuff' }
	]

	const openResume = () => {
		window.open('roselyn_huynh_resume.pdf', '_blank')
	}
</script>
