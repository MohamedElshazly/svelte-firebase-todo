/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from 'firebase/auth';

export interface Session {
	user: User | null;
	loading: boolean;
	data: any;
	error: any;
}
