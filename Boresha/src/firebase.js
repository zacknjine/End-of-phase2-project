import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAwEn0LuAS7nrguKBsqFdvGo4ngDJmQ4E0",
  authDomain: "boresha-french-beans-13850.firebaseapp.com",
  projectId: "boresha-french-beans-13850",
  storageBucket: "boresha-french-beans-13850.appspot.com",
  messagingSenderId: "289452501511",
  appId: "1:289452501511:web:a250f89202a9c3a6d5d8a2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

console.log("Firebase App Initialized: ", app);
console.log("Firestore Instance: ", db);
console.log("Auth Instance: ", auth);

export { db, auth };
