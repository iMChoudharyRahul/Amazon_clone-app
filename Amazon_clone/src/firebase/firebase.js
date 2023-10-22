// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE2rj72vF2Plhc6xq5-GNaRQQOSS3gPvg",
  authDomain: "clone-736f6.firebaseapp.com",
  projectId: "clone-736f6",
  storageBucket: "clone-736f6.appspot.com",
  messagingSenderId: "1081573193881",
  appId: "1:1081573193881:web:41cb54ddbd6d5d4c442008",
  measurementId: "G-GWF573B76L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
