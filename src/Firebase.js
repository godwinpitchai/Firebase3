
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCHcLRjrmKJ84rNxL9NhIKAz6v5oE6jQzw",
    authDomain: "fir-sbs-632e5.firebaseapp.com",
    projectId: "fir-sbs-632e5",
    storageBucket: "fir-sbs-632e5.firebasestorage.app",
    messagingSenderId: "488152720671",
    appId: "1:488152720671:web:f9a4b53fdf019ed8523c2a",
    measurementId: "G-4DJWXHFD7L",
  databaseURL: "https://fir-sbs-632e5-default-rtdb.firebaseio.com/"
};


export const app = initializeApp(firebaseConfig);
