import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  //.env file for api
  apiKey: "AIzaSyDYhoMTXVxSOyzfBY1QMrbaW8cBiSWevfg",
  authDomain: "fir-firestore-tut-5b5f6.firebaseapp.com",
  projectId: "fir-firestore-tut-5b5f6",
  storageBucket: "fir-firestore-tut-5b5f6.appspot.com",
  messagingSenderId: "872202421655",
  appId: "1:872202421655:web:af8b31b488b17a8c51b0d2",
  measurementId: "G-4FRFDRG26Z"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()