// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e4d99.firebaseapp.com",
  projectId: "mern-estate-e4d99",
  storageBucket: "mern-estate-e4d99.appspot.com",
  messagingSenderId: "317712185769",
  appId: "1:317712185769:web:bc505a8e1b4dc55d47acb8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
