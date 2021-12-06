import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOYU6M3A7qQifaMiIHkZlQBbXfNi__0M4",
  authDomain: "reactjs-disneyclone.firebaseapp.com",
  projectId: "reactjs-disneyclone",
  storageBucket: "reactjs-disneyclone.appspot.com",
  messagingSenderId: "276768487358",
  appId: "1:276768487358:web:014c25effec90042976bef",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
