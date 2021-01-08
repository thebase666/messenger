import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD1kNVIXVm6Cp9c8TwxYvB8luE4j_1AVXQ",
    authDomain: "messenger-4476f.firebaseapp.com",
    projectId: "messenger-4476f",
    storageBucket: "messenger-4476f.appspot.com",
    messagingSenderId: "246238661854",
    appId: "1:246238661854:web:adc7a69d72b17d27b2c64f",
    measurementId: "G-7M8FL5J0F0"
  });

const db = firebaseApp.firestore();

export default db;