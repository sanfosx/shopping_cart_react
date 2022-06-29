import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAyC7iNxjueUipuzOeuvF782ljQ3sDfO3E",
    authDomain: "resto-app-7e642.firebaseapp.com",
    databaseURL: "https://resto-app-7e642-default-rtdb.firebaseio.com",
    projectId: "resto-app-7e642",
    storageBucket: "resto-app-7e642.appspot.com",
    messagingSenderId: "414763261446",
    appId: "1:414763261446:web:9f7168fac9d8328bef6d87",
    measurementId: "G-Y4N9TC2E2E"
}
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);