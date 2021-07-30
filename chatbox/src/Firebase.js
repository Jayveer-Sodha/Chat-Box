
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCGJajXcvZJWwPt_8pYlJqHlJP_OPFkcxE",
    authDomain: "chatbox-8488.firebaseapp.com",
    projectId: "chatbox-8488",
    storageBucket: "chatbox-8488.appspot.com",
    messagingSenderId: "971948244139",
    appId: "1:971948244139:web:d4c3a7e374270c7a2c4bee",
    measurementId: "G-LN5DY802F3"
  });
const db = firebaseApp.firestore();
const fire = firebaseApp;
export default fire;

export { db } ;
