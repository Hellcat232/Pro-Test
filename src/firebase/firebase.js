// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDJLGDIDgCBKHEBqiz5juJZoAguZa2yFO8",
  authDomain: "pro-test-aeaa4.firebaseapp.com",
  projectId: "pro-test-aeaa4",
  storageBucket: "pro-test-aeaa4.appspot.com",
  messagingSenderId: "691702024668",
  appId: "1:691702024668:web:f24b953debd946dc06a719",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
