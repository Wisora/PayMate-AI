import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Diagnostic check to verify environment variables load correctly
if (import.meta.env.DEV) {
  console.group("🚀 Environment Variables Check");
  console.log("Firebase API Key Present:", !!import.meta.env.VITE_FIREBASE_API_KEY);
  console.log("Firebase Project ID:", import.meta.env.VITE_FIREBASE_PROJECT_ID || "❌ Missing");
  console.log("Custom API Base URL:", import.meta.env.VITE_API_BASE_URL || "❌ Missing");
  console.log("Custom API Key Present:", !!import.meta.env.VITE_API_KEY);
  console.groupEnd();
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;