import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv44LeATyHC0JV3BO4e0yaz4-EZ8E5qCU",
  authDomain: "auth-football-504a2.firebaseapp.com",
  projectId: "auth-football-504a2",
  storageBucket: "auth-football-504a2.firebasestorage.app",
  messagingSenderId: "487132470685",
  appId: "1:487132470685:web:5b8b18dc453853dd8a6374",
  measurementId: "G-RN43G2KTWH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { app, auth };
