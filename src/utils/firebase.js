import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA7CtCdJY_3htcSJUo1jbPGy-98o6Hyqn0",
    authDomain: "learn-firebase-e3717.firebaseapp.com",
    projectId: "learn-firebase-e3717",
    storageBucket: "learn-firebase-e3717.appspot.com",
    messagingSenderId: "435136995780",
    appId: "1:435136995780:web:d18cc5bdc9444bffa04491",
    measurementId: "G-YQFW2D7M5Q",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

export default db;