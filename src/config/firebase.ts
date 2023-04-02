// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTnokdynfdfyOGA4b2y8CFiuLPAso7bSE",
  authDomain: "react-course-d4fcb.firebaseapp.com",
  projectId: "react-course-d4fcb",
  storageBucket: "react-course-d4fcb.appspot.com",
  messagingSenderId: "815319356593",
  appId: "1:815319356593:web:c731066e61c7db9466fe90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
