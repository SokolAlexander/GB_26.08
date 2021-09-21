// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKNMSiCODOw9WK6BLpdiP3-OqAte6xT9c",
  authDomain: "gb-example.firebaseapp.com",
  databaseURL: "https://gb-example-default-rtdb.firebaseio.com",
  projectId: "gb-example",
  storageBucket: "gb-example.appspot.com",
  messagingSenderId: "551097765406",
  appId: "1:551097765406:web:2e6bba7d5058ba9f43e80f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const signUp = (email, pass) => {
  auth.createUserWithEmailAndPassword(email, pass);
}

export const login = (email, pass) => {
  auth.loginWithEmailAndPassword(email, pass);
};
