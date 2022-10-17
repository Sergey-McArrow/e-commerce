import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	// 	apiKey: 'AIzaSyBGjc9obtMC0E-PrkuxVGp8jFK9p1xq3Lo',
	// 	authDomain: 'admin-panel-6259a.firebaseapp.com',
	// 	projectId: 'admin-panel-6259a',
	// 	storageBucket: 'admin-panel-6259a.appspot.com',
	// 	messagingSenderId: '206055936206',
	// 	appId: '1:206055936206:web:c4c1c064dae33a6e2f809f',
	// 	databaseURL:
	// 		'https://admin-panel-6259a-default-rtdb.europe-west1.firebasedatabase.app',
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: 'admin-panel-6259a.appspot.com',
	messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const auth = getAuth(app)
