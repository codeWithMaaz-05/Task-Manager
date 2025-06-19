// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeA_l_hV9qdvqZGTPgeUNabi9DNRGcSuc",
  authDomain: "task-manager-e850b.firebaseapp.com",
  projectId: "task-manager-e850b",
  storageBucket: "task-manager-e850b.firebasestorage.app",
  messagingSenderId: "616347294210",
  appId: "1:616347294210:web:1b3b8b2fad8eace66f251b",
  measurementId: "G-LJS2VBWYRM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);