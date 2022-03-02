import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBVF7esIce_Ej2O6WCAjb2_jHCoexa-QW8",
  authDomain: "slack-clone-4b4a2.firebaseapp.com",
  projectId: "slack-clone-4b4a2",
  storageBucket: "slack-clone-4b4a2.appspot.com",
  messagingSenderId: "98009286181",
  appId: "1:98009286181:web:cf38e62e7bacf7e64721cc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db}