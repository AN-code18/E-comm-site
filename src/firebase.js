// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBB0Ti-qbKY29Amj1u33xx-pX6Dj4Fhwe0",
  authDomain: "e-commerce-4fb85.firebaseapp.com",
  projectId: "e-commerce-4fb85",
  storageBucket: "e-commerce-4fb85.appspot.com",
  messagingSenderId: "106224302924",
  appId: "1:106224302924:web:eaa65bb1749b06e11a2de9",
  measurementId: "G-BMEK7MZL5J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
