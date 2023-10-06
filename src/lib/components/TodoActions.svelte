<script lang="ts">
	import { Button, Modal, Textarea } from 'flowbite-svelte';
	import { EditOutline, TrashBinOutline } from 'flowbite-svelte-icons';

	import { todos } from '$lib/stores/todoStore';

	export let todoId: number;

	let isOpen = false;

	let value = $todos.find((todo) => todo.id === todoId)?.text || '';

	const editTodo = () => {
		todos.editTodo(todoId, value);
	};
	const deleteTodo = () => {
		todos.removeTodo(todoId);
	};
</script>

<div class="flex gap-1">
	<Button class="w-full" size="xs" on:click={() => (isOpen = !isOpen)}>
		<EditOutline class="ml-2 text-white" size="sm" />
		<p class="ml-2">Edit</p>
	</Button>
	<Button class="w-fit" size="xs" on:click={deleteTodo}>
		<TrashBinOutline class="ml-2 text-white" size="sm" />
		<p class="ml-2">Delete</p>
	</Button>
</div>

<Modal title="Edit todo" bind:open={isOpen} autoclose outsideclose>
	<div class="flex flex-col gap-2">
		<Textarea placeholder="What do you need to do?" bind:value />
	</div>
	<svelte:fragment slot="footer">
		<Button on:click={editTodo}>Edit</Button>
		<Button on:click={() => (isOpen = !isOpen)} color="light">Cancel</Button>
	</svelte:fragment>
</Modal>
