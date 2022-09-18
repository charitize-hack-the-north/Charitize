import { getDatabase } from "@firebase/database";
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore"; 
    
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZJ6zRZHp6oUIvzmse1SiyO7-huX7V5As",
    authDomain: "charitize-dd918.firebaseapp.com",
    databaseURL: "https://charitize-dd918-default-rtdb.firebaseio.com",
    projectId: "charitize-dd918",
    storageBucket: "charitize-dd918.appspot.com",
    messagingSenderId: "425485368574",
    appId: "1:425485368574:web:cc542d614f007d4c5f39af",
    measurementId: "G-T36THFJSWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getDatabase(app);
