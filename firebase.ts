// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // We added this with Sinetemba
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpxhg4uHKC5J8WTOe4A82DeHH7m9PdHp0",
  authDomain: "rwanda-online-election.firebaseapp.com",
  projectId: "rwanda-online-election",
  storageBucket: "rwanda-online-election.appspot.com",
  messagingSenderId: "639824154186",
  appId: "1:639824154186:web:94856766de00ee281260b3",
  measurementId: "G-H6E39XPG3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app); //We added this
const auth = getAuth(app);

export {auth, firestore};