
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyByNRQKbzoqx7sezd7RfXqiHUXPTT2XkGw",
  authDomain: "my-e-commerse.firebaseapp.com",
  projectId: "my-e-commerse",
  storageBucket: "my-e-commerse.appspot.com",
  messagingSenderId: "844098055055",
  appId: "1:844098055055:web:5a9465d826fe6510e439fa"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)