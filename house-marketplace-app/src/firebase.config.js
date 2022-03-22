// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeIjfpvaE0vXisQ14ucfdXdldw4xGWSwk",
  authDomain: "house-marketplace-d7443.firebaseapp.com",
  projectId: "house-marketplace-d7443",
  storageBucket: "house-marketplace-d7443.appspot.com",
  messagingSenderId: "634233550726",
  appId: "1:634233550726:web:dc437bc6e44a17776ede07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()