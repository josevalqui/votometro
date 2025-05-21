import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: "AIzaSyD73NUn3dESrSkAFBQfywqJmAjyDKDGzeE",
  authDomain: "votometro-5dec8.firebaseapp.com",
  projectId: "votometro-5dec8",
  storageBucket: "votometro-5dec8.firebasestorage.app",
  messagingSenderId: "410453365556",
  appId: "1:410453365556:web:670182c618218ca1220b61"
};


const app = initializeApp(firebaseConfig)

// initialize App Check before any other Firebase service
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LegC-4qAAAAAD_uSa8RMbWNYBh2wDbQ8HCPELAi'),
  isTokenAutoRefreshEnabled: true
})

export const db   = getFirestore(app)
export const auth = getAuth(app)