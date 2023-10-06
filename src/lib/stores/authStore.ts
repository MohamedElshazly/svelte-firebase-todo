import { auth } from '$lib/firebase';
import type { Session } from '$lib/types/session';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { writable } from 'svelte/store';

function authStore() {
	const { subscribe, update } = writable<Session>({
		user: null,
		loading: true,
		data: {},
		error: {}
	});

	return {
		subscribe,
		signUp: async ({ email, password }: { email: string; password: string }) => {
			await createUserWithEmailAndPassword(auth, email, password)
				.then((userCredentials) => {
					update((session) => {
						session.user = userCredentials.user;
						session.loading = false;
						session.data = userCredentials.user.providerData;
						return session;
					});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					update((session) => {
						session.error = {
							code: errorCode,
							message: errorMessage
						};
						session.loading = false;
						return session;
					});
				});
		},
		login: async ({ email, password }: { email: string; password: string }) => {
			await signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					update((session) => {
						session.user = user;
						session.loading = false;
						session.data = user.providerData;
						return session;
					});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					update((session) => {
						session.error = {
							code: errorCode,
							message: errorMessage
						};
						session.loading = false;
						return session;
					});
				});
		},
		logout: async () => {
			await signOut(auth)
				.then(() => {
					update((session) => {
						session.user = null;
						session.loading = false;
						session.data = {};
						return session;
					});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					update((session) => {
						session.error = {
							code: errorCode,
							message: errorMessage
						};
						session.loading = false;
						return session;
					});
				});
		}
	};
}

export const session = authStore();
