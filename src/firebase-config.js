// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT7Woo82lSkpnv3YZNrYTgIq9VOVYMa80",
  authDomain: "pokeapi-bfb9c.firebaseapp.com",
  projectId: "pokeapi-bfb9c",
  storageBucket: "pokeapi-bfb9c.appspot.com",
  messagingSenderId: "260876359999",
  appId: "1:260876359999:web:ce5692fdc4d4ae0a73db8a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}