import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoOn5JOhxPscApKQ_iJBCj-56Fi7eSHCw",
  authDomain: "instagram-770e1.firebaseapp.com",
  projectId: "instagram-770e1",
  storageBucket: "instagram-770e1.appspot.com",
  messagingSenderId: "90302667726",
  appId: "1:90302667726:web:15ccd4bc74a7b502ef699f",
  measurementId: "G-FXQ3KF461D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app)