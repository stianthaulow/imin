import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDCQZQhVkYZKqQovRvqRVNWi86aPev-nQg",
  authDomain: "imin-dev-3ab1b.firebaseapp.com",
  databaseURL: "https://imin-dev-3ab1b.firebaseio.com",
  projectId: "imin-dev-3ab1b",
  storageBucket: "imin-dev-3ab1b.appspot.com",
  messagingSenderId: "220127300794"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const providers = {
  facebook: new firebase.auth.FacebookAuthProvider(),
  google: new firebase.auth.GoogleAuthProvider()
};

export const db = firebase.firestore();

export default firebase;