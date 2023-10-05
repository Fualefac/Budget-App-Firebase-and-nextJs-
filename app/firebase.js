// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyCG0SOdRi0ss_KB4BCS7mvxziXj7EcH528",
  authDomain: "tracker-a730e.firebaseapp.com",
  projectId: "tracker-a730e",
  storageBucket: "tracker-a730e.appspot.com",
  messagingSenderId: "578078332146",
  appId: "1:578078332146:web:4340cb64668edccd2b2c6b"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);