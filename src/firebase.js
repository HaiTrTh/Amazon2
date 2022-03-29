import { initializeApp } from 'firebase/app'
import {
  getAuth
} from 'firebase/auth'
import {
  getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAxqCkdwEtqPMygkL-JzDuPFEWw0X7PFGI",
  authDomain: "clone-84c40.firebaseapp.com",
  projectId: "clone-84c40",
  storageBucket: "clone-84c40.appspot.com",
  messagingSenderId: "156007780682",
  appId: "1:156007780682:web:5bde1272e2d064c78bb1b3",
  measurementId: "G-TKVLTNPJXH"
};

initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()

export { db, auth } 