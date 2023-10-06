import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyAneBuXt32MZG1c9dZ-eG_x1wptZm18EE0',
	authDomain: 'sveltefire-test-f9439.firebaseapp.com',
	projectId: 'sveltefire-test-f9439',
	storageBucket: 'sveltefire-test-f9439.appspot.com',
	messagingSenderId: '577992584329',
	appId: '1:577992584329:web:894e8772a713066e53aa58'
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
