// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB0vSELBiPcPdcGQ3Nb247RCqGD-af167Y",
  authDomain: "fir-todo-93abb.firebaseapp.com",
  projectId: "fir-todo-93abb",
  storageBucket: "fir-todo-93abb.appspot.com",
  messagingSenderId: "773627056086",
  appId: "1:773627056086:web:f349255e0165d32b0d9e77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)