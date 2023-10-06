<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	import TodoActions from './TodoActions.svelte';
	import type { TodoType } from '$lib/types/todo';

	export let todo: TodoType;
</script>

<Card horizontal class="gap-6 flex justify-between items-center w-full mx-auto">
	<h5
		class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden text-ellipsis"
	>
		{todo.text}
	</h5>
	<TodoActions todoId={todo.id} />
</Card>
