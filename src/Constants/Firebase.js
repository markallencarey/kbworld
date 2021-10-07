// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAfvd_bXbyrx2QU5HARFuKupcVKE_c_MEo',
	authDomain: 'kbworld-52305.firebaseapp.com',
	projectId: 'kbworld-52305',
	storageBucket: 'kbworld-52305.appspot.com',
	messagingSenderId: '784100038597',
	appId: '1:784100038597:web:91ffa4d3774d68db0e5dac',
	measurementId: 'G-D9TF0NJWH7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const admin = require('firebase-admin')
const analytics = getAnalytics(app)

admin.initializeApp()

const auth = getAuth()
const db = admin.firestore()
const storage = getStorage(firebaseApp)

export default { admin, auth, db, storage }
