// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }  from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWRJoP40xxDZIvTaOhzaH5qdJ5-j5814I",
  authDomain: "projectairtech-auth.firebaseapp.com",
  projectId: "projectairtech-auth",
  storageBucket: "projectairtech-auth.appspot.com",
  messagingSenderId: "824578221435",
  appId: "1:824578221435:web:1c6add61bdc23a0c7989de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };