// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMpmGeuitobuO-9AabIhgHZ0dAESIHNEY",
  authDomain: "blog-9d4bb.firebaseapp.com",
  projectId: "blog-9d4bb",
  storageBucket: "blog-9d4bb.appspot.com",
  messagingSenderId: "225851046605",
  appId: "1:225851046605:web:0c87b37e1e0a908abf0784",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
