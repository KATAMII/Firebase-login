// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB18VQbYMJM21kdW7cq-2JSKBxggIfjcU",
  authDomain: "fir-signin-3b3a7.firebaseapp.com",
  projectId: "fir-signin-3b3a7",
  storageBucket: "fir-signin-3b3a7.appspot.com",
  messagingSenderId: "13430334042",
  appId: "1:13430334042:web:777967db80c67d942b2e63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore();
export default app;