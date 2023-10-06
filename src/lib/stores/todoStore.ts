import type { TodoType } from '$lib/types/todo';
import { writable } from 'svelte/store';

function todoStore() {
	const { subscribe, update } = writable<TodoType[]>([
		{
			id: 1,
			text: 'Learn Svelte',
			status: 'done'
		}
	]);

	return {
		subscribe,
		addTodo: (todo: TodoType) => {
			update((todos) => [...todos, todo]);
		},
		removeTodo: (id: number) => {
			update((todos) => todos.filter((todo: TodoType) => todo.id !== id));
		},
		editTodo: (id: number, text: string) => {
			update((todos) =>
				todos.map((todo: TodoType) => {
					if (todo.id === id) {
						return { ...todo, text };
					}
					return todo;
				})
			);
		}
	};
}

export const todos = todoStore();
