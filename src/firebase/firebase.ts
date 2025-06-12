import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAV4H-inKAVDHIRi9u-autkeRYhvcbJIAc",
  authDomain: "etobiportfolio.firebaseapp.com",
  projectId: "etobiportfolio",
  storageBucket: "etobiportfolio.appspot.com",
  messagingSenderId: "207014917772",
  appId: "1:207014917772:web:default",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
