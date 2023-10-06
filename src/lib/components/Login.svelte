<script>
	import { session } from '$lib/stores/authStore';
	import { Label, Input, Button, Heading, Helper } from 'flowbite-svelte';
	const formValues = {
		email: {
			value: '',
			error: ''
		},
		password: {
			value: '',
			error: ''
		}
	};
	const validate = () => {
		if (!formValues.password.value) {
			formValues.password.error = 'Passwords is required';
			return false;
		}
		if (!formValues.email.value) {
			formValues.email.error = 'Email is required';
			return false;
		}
		formValues.email.error = '';
		formValues.password.error = '';
		return true;
	};
	function handleLogin() {
		if (!validate()) {
			return;
		}
		session.login({
			email: formValues.email.value,
			password: formValues.password.value
		});
	}
</script>

<form class="w-full flex flex-col gap-6">
	<Heading tag="h3" class="text-center">Firebase Practice</Heading>
	<div class="w-full">
		<Label for="email" class="block mb-2">Email</Label>
		<Input
			type="email"
			id="email"
			name="email"
			on:change={() => {
				validate();
			}}
			bind:value={formValues.email.value}
			placeholder="Email"
			class="dark:focus:!border-purple-400 dark:focus:!ring-purple-400"
		/>
		{#if formValues.email.error}
			<Helper class="mt-2" color="red"
				><span class="font-medium">{formValues.email.error}</span></Helper
			>
		{/if}
	</div>

	<div class="w-full">
		<Label for="password" class="block mb-2">Password</Label>
		<Input
			type="password"
			id="password"
			name="password"
			on:change={() => {
				validate();
			}}
			bind:value={formValues.password.value}
			placeholder="Password"
			class="dark:focus:!border-purple-400 dark:focus:!ring-purple-400"
		/>
		{#if formValues.password.error}
			<Helper class="mt-2" color="red"
				><span class="font-medium">{formValues.password.error}</span></Helper
			>
		{/if}
	</div>

	<Button type="submit" color="dark" on:click={handleLogin}>Login</Button>
	<div>
		<Heading tag="h6" class="text-sm"
			>Don't have an account? <a class="underline" href="/signup">Sign up!</a></Heading
		>
	</div>
</form>
