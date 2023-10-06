import type { Actions } from './$types';

export const actions = {
	login: async (event) => {
		// TODO log the user in
		console.log(event.request.body);
	}
} satisfies Actions;
