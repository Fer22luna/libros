import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1_EBNwPazvgMouWMRJvTL7qXRVIvxw8s",
  authDomain: "blagdaross-libros.firebaseapp.com",
  projectId: "blagdaross-libros",
  storageBucket: "blagdaross-libros.appspot.com",
  messagingSenderId: "1000586779725",
  appId: "1:1000586779725:web:5162ce96fd155ab5801004",
  measurementId: "G-JVCW5L6LSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore
export const db = getFirestore(app);
