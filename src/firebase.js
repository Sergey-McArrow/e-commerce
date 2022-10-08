import firebase from 'firebase/compat/app'
import { auth } from 'firebaseui'
import { getFirestore } from 'firebase/firestore'
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage'
import { getImageURL } from './helpers'

const firebaseConfig = {
	apiKey: 'AIzaSyBGjc9obtMC0E-PrkuxVGp8jFK9p1xq3Lo',
	authDomain: 'admin-panel-6259a.firebaseapp.com',
	projectId: 'admin-panel-6259a',
	storageBucket: 'admin-panel-6259a.appspot.com',
	messagingSenderId: '206055936206',
	appId: '1:206055936206:web:c4c1c064dae33a6e2f809f',
}
const uiConfig = {
	callbacks: {
		signInSuccessWithAuthResult: function (authResult, redirectUrl) {
			console.log('user log')
			redirectUrl = '/admin'
			// User successfully signed in.
			// Return type determines whether we continue the redirect automatically
			// or whether we leave that to developer to handle.
			return true
		},
		uiShown: function () {
			// The widget is rendered.
			// Hide the loader.
			document.getElementById('loader').style.display = 'none'
		},
	},
	// Will use popup for IDP Providers sign-in flow instead of the default, redirect.
	signInFlow: 'popup',
	signInSuccessUrl: 'admin',
	signInOptions: [
		// Leave the lines as is for the providers you want to offer your users.
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
	],
	// Terms of service url.
	tosUrl: '<your-tos-url>',
	// Privacy policy url.
	privacyPolicyUrl: '<your-privacy-policy-url>',
}

const FirebaseApp = firebase.initializeApp(firebaseConfig)
const ui = new auth.AuthUI(firebase.auth())
const db = getFirestore(FirebaseApp)
const storage = getStorage(FirebaseApp)

const uploader = files => {
	files.forEach(file => {
		const imagesRef = ref(storage, 'images')
		const imageRef = ref(imagesRef, file.name)
		const uploadTask = uploadBytesResumable(imageRef, file)

		uploadTask.on(
			'state_changed',
			snapshot => {
				const progress =
					((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) +
					'%'
				const bar = document.querySelector('#progress-bar')
				bar.textContent = progress
				bar.style.background = '#81c784'
				bar.style.width = progress
			},
			error => {
				console.log(error)
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
					console.log('File available at', downloadURL)
					getImageURL(downloadURL)
				})
			},
		)
	})
}

export { FirebaseApp, ui, uiConfig, uploader }
