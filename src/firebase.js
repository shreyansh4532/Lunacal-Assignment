// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "lunacal-assignment.firebaseapp.com",
  projectId: "lunacal-assignment",
  storageBucket: "lunacal-assignment.appspot.com",
  messagingSenderId: "831804845628",
  appId: "1:831804845628:web:035557c27f36475088dd39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);