import { ref } from 'vue'
import { auth, provider } from '../firebase/firebase'
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth'

const user = ref<User | null>(null)

onAuthStateChanged(auth, (u) => {
  user.value = u
})

export function useAuth() {
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, provider)
  }

  const logout = async () => {
    await signOut(auth)
  }

  return {
    user,
    login,
    loginWithGoogle,
    logout
  }
}
