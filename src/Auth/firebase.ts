import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD1YCmuJP9A4BhTf5PCJCsO1I6reB4Z1tQ",
  authDomain: "fbclone-b33fd.firebaseapp.com",
  projectId: "fbclone-b33fd",
  storageBucket: "fbclone-b33fd.appspot.com",
  messagingSenderId: "305892258496",
  appId: "1:305892258496:web:ad7b2ff1b605f52c2db325",
  measurementId: "G-PBMH7KRGKW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
