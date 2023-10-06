<script>
	import { todos } from '$lib/stores/todoStore';
	import { List, ListgroupItem } from 'flowbite-svelte';
	import TodoCard from './TodoCard.svelte';
</script>

<List tag="ul" class="w-full">
	{#each $todos as todo}
		<ListgroupItem>
			<TodoCard {todo} />
		</ListgroupItem>
	{/each}
</List>
