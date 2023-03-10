// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCeys0UCoGI2vjgpwA5qAZA2Don31gIHH8',
  authDomain: 'pawpaws-react-auth.firebaseapp.com',
  projectId: 'pawpaws-react-auth',
  storageBucket: 'pawpaws-react-auth.appspot.com',
  messagingSenderId: '832519056433',
  appId: '1:832519056433:web:3b6e6bb9d75b2e9ca57910',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const provide = new GoogleAuthProvider()
