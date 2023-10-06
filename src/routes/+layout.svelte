<script lang="ts">
	import { auth } from '$lib';
	import { Button } from 'flowbite-svelte';
	import '../app.postcss';
	import { beforeUpdate, onMount } from 'svelte';
	import { session } from '$lib/stores/authStore';

	const unprotectedRoutes = ['/login', '/signup'];

	beforeUpdate(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			const currentPath = window.location.pathname;

			if (!user && !unprotectedRoutes.includes(currentPath)) {
				window.location.href = '/login';
				return;
			}

			if (user && unprotectedRoutes.includes(currentPath)) {
				window.location.href = '/';
				return;
			}

			if (!user) {
				return;
			}
		});

		return unsubscribe;
	});

	const user = auth.currentUser;
</script>

<main>
	{#if user}
		<div class="flex gap-2 items-center">
			<h1 class="text-white">Logged in as {user.email}</h1>
			<Button on:click={session.logout}>Logout</Button>
		</div>
	{/if}
	<slot />
</main>
