import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8LzarLqGpTHuKb_F-7-JxEUefG9se80U",
  authDomain: "udemy-vue-tnn-blog.firebaseapp.com",
  projectId: "udemy-vue-tnn-blog",
  storageBucket: "udemy-vue-tnn-blog.appspot.com",
  messagingSenderId: "285478383757",
  appId: "1:285478383757:web:e59244b8a9cdadcdd932c4",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };
