// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWEaKrG6fbrZjjUCpBIHBTagIjzvXcyOc",
  authDomain: "pantry-tracker-f5a3f.firebaseapp.com",
  projectId: "pantry-tracker-f5a3f",
  storageBucket: "pantry-tracker-f5a3f.appspot.com",
  messagingSenderId: "786259011866",
  appId: "1:786259011866:web:61db88fd2d57d42da664a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);