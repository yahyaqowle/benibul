// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQmxbrZalbfqssTPSqjnGnaJ0TBkupbXQ",
  authDomain: "signup-auth-6c4c5.firebaseapp.com",
  projectId: "signup-auth-6c4c5",
  storageBucket: "signup-auth-6c4c5.appspot.com",
  messagingSenderId: "790570303315",
  appId: "1:790570303315:web:3dfd80e02a592c54e6eba6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);