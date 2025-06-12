import { ref, onMounted } from 'vue'
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where
} from 'firebase/firestore'
import { db } from '../firebase/firebase'

export const blogPosts = ref<any[]>([])

export async function fetchPosts() {
  const q = query(collection(db, 'blogPosts'))
  const snap = await getDocs(q)
  blogPosts.value = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export async function getPostBySlug(slug: string) {
  const q = query(collection(db, 'blogPosts'), where('slug', '==', slug))
  const snap = await getDocs(q)
  return snap.docs[0]?.data() || null
}

export async function addPost(data: any) {
  await addDoc(collection(db, 'blogPosts'), data)
}

export async function updatePost(id: string, data: any) {
  await updateDoc(doc(db, 'blogPosts', id), data)
}

export async function deletePost(id: string) {
  await deleteDoc(doc(db, 'blogPosts', id))
}
