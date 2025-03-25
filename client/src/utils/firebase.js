// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-8e1e4.firebaseapp.com",
  projectId: "taskmanager-8e1e4",
  storageBucket: "taskmanager-8e1e4.firebasestorage.app",
  messagingSenderId: "44706099417",
  appId: "1:44706099417:web:cf093a0f90575ab1e64ec8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);