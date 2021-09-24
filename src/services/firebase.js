import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as firbaseSignOut, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAKNMSiCODOw9WK6BLpdiP3-OqAte6xT9c",
  authDomain: "gb-example.firebaseapp.com",
  databaseURL: "https://gb-example-default-rtdb.firebaseio.com",
  projectId: "gb-example",
  storageBucket: "gb-example.appspot.com",
  messagingSenderId: "551097765406",
  appId: "1:551097765406:web:2e6bba7d5058ba9f43e80f",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getDatabase();

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
}

export const login = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};

export const signOut = async () => {
  await firbaseSignOut(auth);
}

