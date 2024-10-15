// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getDatabase ,ref} from "firebase/database";
import firebase from "firebase/compat/app"


const firebaseConfig = {
  apiKey: "AIzaSyBVBTSig3QNIVYVbiXyMT13yZCWKGKZcqs",
  authDomain: "where-s-my-money-18.firebaseapp.com",
  projectId: "where-s-my-money-18",
  storageBucket: "where-s-my-money-18.appspot.com",
  messagingSenderId: "775424436865",
  appId: "1:775424436865:web:2c073ae36293b713b93b80",
  measurementId: "G-TPTKSSMHBP"
};




const app = initializeApp(firebaseConfig);
const database = getDatabase();

const db = getFirestore(app);

const firebaseAuth = getAuth(app);
export { firebaseAuth ,db};
