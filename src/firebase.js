import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC-pl2HeFDnWnBAMk340IfFeTPRMW-rubs",
  authDomain: "imin-b7daa.firebaseapp.com",
  databaseURL: "https://imin-b7daa.firebaseio.com",
  projectId: "imin-b7daa",
  storageBucket: "imin-b7daa.appspot.com",
  messagingSenderId: "417133724160"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const providers = {
  facebook: new firebase.auth.FacebookAuthProvider(),
  google: new firebase.auth.GoogleAuthProvider()
};

export const db = firebase.firestore();

export default firebase;
