import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA5BJuNZWv0b1lAEGnJfTWnfQGQ6AiUduY",
  authDomain: "berville-36d7b.firebaseapp.com",
  projectId: "berville-36d7b",
  storageBucket: "berville-36d7b.appspot.com",
  messagingSenderId: "453846191996",
  databaseURL: "https://berville-36d7b-default-rtdb.europe-west1.firebasedatabase.app/",
  appId: "1:453846191996:web:a18004170c8c3775429ef9",
  measurementId: "G-MJ0LQBCFBX"
};

export const signInWithFacebook = () => {
  const provider = new firebaseAuth.FacebookAuthProvider();
  return firebaseAuth().signInWithPopup(provider);
};

export const signOut = () => {
  return firebaseAuth().signOut();
};

export const firebaseApp = firebase.initializeApp(config);
export const firebaseDb = firebase.database();
export const firebaseAuth = firebase.auth;
