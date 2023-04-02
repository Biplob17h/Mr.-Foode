// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1tpsgrRgpOqLqgDiZWMvBCM00gsdwBIQ",
  authDomain: "mr-foode.firebaseapp.com",
  projectId: "mr-foode",
  storageBucket: "mr-foode.appspot.com",
  messagingSenderId: "1086345633772",
  appId: "1:1086345633772:web:21697c68aeb945cc27eac9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;