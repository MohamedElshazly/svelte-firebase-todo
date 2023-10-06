<script>
	import { Label, Input, Button, Heading, Helper } from 'flowbite-svelte';
</script>

<form class="w-full flex flex-col gap-6">
	<Heading tag="h3" class="text-center">Firebase Practice</Heading>
	<div class="w-full">
		<Label for="email" class="block mb-2">Email</Label>
		<Input
			type="email"
			id="email"
			name="email"
			placeholder="Email"
			class="dark:focus:!border-purple-400 dark:focus:!ring-purple-400"
		/>
		{#if false}
			<Helper class="mt-2" color="red"
				><span class="font-medium">Not so well done!</span> Some error message.</Helper
			>
		{/if}
	</div>

	<div class="w-full">
		<Label for="password" class="block mb-2">Password</Label>
		<Input
			type="password"
			id="password"
			name="password"
			placeholder="Password"
			class="dark:focus:!border-purple-400 dark:focus:!ring-purple-400"
		/>
		{#if false}
			<Helper class="mt-2" color="red"
				><span class="font-medium">Not so well done!</span> Some error message.</Helper
			>
		{/if}
	</div>

	<Button type="submit" color="dark">Login</Button>
	<div>
		<Heading tag="h6" class="text-sm"
			>Don't have an account? <a class="underline" href="/signup">Sign up!</a></Heading
		>
	</div>
</form>
