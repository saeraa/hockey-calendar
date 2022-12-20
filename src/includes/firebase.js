import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
// import { getFirestore, collection } from "firebase/firestore"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYe2WPx-gq70RKSkTjHrOqySSyydHJbGM",
  authDomain: "calendar-5c731.firebaseapp.com",
  projectId: "calendar-5c731",
  storageBucket: "calendar-5c731.appspot.com",
  messagingSenderId: "494783663095",
  appId: "1:494783663095:web:ead547d5187a0226a13cf2",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");
const teamsCollection = db.collection("teams");
const gamesCollection = db.collection("games");

export { auth, db, usersCollection, teamsCollection, gamesCollection };
