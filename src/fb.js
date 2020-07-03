import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC_yKkHnfJh-Hbx3eupgeTU438pt-854jo",
  authDomain: "job-suite.firebaseapp.com",
  databaseURL: "https://job-suite.firebaseio.com",
  projectId: "job-suite",
  storageBucket: "job-suite.appspot.com",
  messagingSenderId: "280149980363",
  appId: "1:280149980363:web:473d754564062ff843174e",
  measurementId: "G-NJJCYTFT7K",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();

export default db;
