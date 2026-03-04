import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Ваша конфигурация из Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "my-day-pwa.firebaseapp.com",
  projectId: "my-day-pwa",
  storageBucket: "my-day-pwa.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);