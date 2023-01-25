import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCV6aASsfh3UdNf5RpyFMvoWYti6cbMTJo",
  authDomain: "chat-react-js-83427.firebaseapp.com",
  projectId: "chat-react-js-83427",
  storageBucket: "chat-react-js-83427.appspot.com",
  messagingSenderId: "152889400995",
  appId: "1:152889400995:web:9c04bebcce2d8f967fe916"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, app };