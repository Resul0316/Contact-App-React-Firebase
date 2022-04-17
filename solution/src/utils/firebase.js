// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyxPK1xW5BNBO3G6rGfpALsouDXKxvpdc",
  authDomain: "fir-contact-app-c8caf.firebaseapp.com",
  databaseURL: "https://fir-contact-app-c8caf-default-rtdb.firebaseio.com",
  projectId: "fir-contact-app-c8caf",
  storageBucket: "fir-contact-app-c8caf.appspot.com",
  messagingSenderId: "96762233024",
  appId: "1:96762233024:web:e9516f78be93a26c8c2d25",
  measurementId: "G-RRQ886BLF7"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;