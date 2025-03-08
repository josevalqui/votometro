import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD73NUn3dESrSkAFBQfywqJmAjyDKDGzeE", // Replace with your API key
  authDomain: "votometro-5dec8.firebaseapp.com",
  projectId: "votometro-5dec8",
  storageBucket: "votometro-5dec8.firebasestorage.app",
  messagingSenderId: "410453365556",
  appId: "1:410453365556:web:670182c618218ca1220b61"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
