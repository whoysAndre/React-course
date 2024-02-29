import { initializeApp } from "firebase/app";
//AUTH
import { getAuth } from "firebase/auth";
//FIRESTORE
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBlHbQNgXunqAxbH1G-TVJtMh0CujK9sVI",
  authDomain: "react-login-124df.firebaseapp.com",
  projectId: "react-login-124df",
  storageBucket: "react-login-124df.appspot.com",
  messagingSenderId: "1048992254289",
  appId: "1:1048992254289:web:60c5b6851c244ba4b6ab70"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

//Para La Authenticación
export const FirebaseAuth = getAuth(FirebaseApp);

//Importamos nuestra db de fireStore
export const FirebaseDB = getFirestore(FirebaseApp); 

