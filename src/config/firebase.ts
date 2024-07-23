// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpXh41VI1xHk41fLWbRssZdB-Pw7oeBBU",
  authDomain: "react-social-media-proje-297e5.firebaseapp.com",
  projectId: "react-social-media-proje-297e5",
  storageBucket: "react-social-media-proje-297e5.appspot.com",
  messagingSenderId: "245829999153",
  appId: "1:245829999153:web:c90e27777f28e67f4c1310",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);