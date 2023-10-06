<script>
	import { Heading, Button, Textarea } from 'flowbite-svelte';
	import TodoList from '$lib/components/TodoList.svelte';
	import { todos } from '$lib/stores/todoStore';

	let value = '';

	const addTodo = () => {
		todos.addTodo({
			id: Math.random(),
			text: value,
			status: 'pending'
		});
		value = '';
	};
</script>

<div class="max-w-3xl mx-auto h-screen flex flex-col gap-10 items-center justify-center">
	<Heading class="text-center">Welcome!</Heading>
	<TodoList />
	<div class="flex flex-col gap-2 w-1/2">
		<Textarea placeholder="What do you need to do?" bind:value />
		<Button class="w-fit mx-auto" on:click={addTodo}>Add a todo</Button>
	</div>
</div>
