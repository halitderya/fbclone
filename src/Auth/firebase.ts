import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Geliştirme modunda mı çalışıyor kontrol et
const isDevMode = import.meta.env.MODE === "development";

// API anahtarını belirle
const apiKey = isDevMode ? import.meta.env.VITE_API_KEY : process.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: isDevMode ? import.meta.env.VITE_AUTH_DOMAIN : process.env.VITE_AUTH_DOMAIN,
  projectId: isDevMode ? import.meta.env.VITE_PROJECT_ID : process.env.VITE_PROJECT_ID,
  storageBucket: isDevMode ? import.meta.env.VITE_STORAGE_BUCKET : process.env.VITE_STORAGE_BUCKET,
  messagingSenderId: isDevMode ? import.meta.env.VITE_MESSAGING_SENDER_ID : process.env.VITE_MESSAGING_SENDER_ID,
  appId: isDevMode ? import.meta.env.VITE_APP_ID : process.env.VITE_APP_ID,
  measurementId: isDevMode ? import.meta.env.VITE_MEASUREMENT_ID : process.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
