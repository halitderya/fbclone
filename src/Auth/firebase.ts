import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Geliştirme modunda mı çalışıyor kontrol et
const isDevMode = import.meta.env.MODE === "development";

// API anahtarını belirle
const apiKey = isDevMode ? import.meta.env.VITE_API_KEY : process.env.VITE_API_KEY;
const authDomain = isDevMode ? import.meta.env.VITE_AUTH_DOMAIN : process.env.VITE_AUTH_DOMAIN;
const projectId = isDevMode ? import.meta.env.VITE_PROJECT_ID : process.env.VITE_PROJECT_ID;
const storageBucket = isDevMode ? import.meta.env.VITE_STORAGE_BUCKET : process.env.VITE_STORAGE_BUCKET;
const messagingSenderId = isDevMode ? import.meta.env.VITE_MESSAGING_SENDER_ID : process.env.VITE_MESSAGING_SENDER_ID;
const appId = isDevMode ? import.meta.env.VITE_APP_ID : process.env.VITE_APP_ID;
const measurementId = isDevMode ? import.meta.env.VITE_MEASUREMENT_ID : process.env.VITE_MEASUREMENT_ID;
const firebaseConfig = {
  apiKey: apiKey,

  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};
console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
