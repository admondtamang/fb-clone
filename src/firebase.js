import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBqQudR33VLsu5WzNV96UC8rg4pNl9cCGc",
  authDomain: "fb-clone-821c5.firebaseapp.com",
  databaseURL: "https://fb-clone-821c5.firebaseio.com",
  projectId: "fb-clone-821c5",
  storageBucket: "fb-clone-821c5.appspot.com",
  messagingSenderId: "716419800256",
  appId: "1:716419800256:web:1a3c95845f549d00fb2125",
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
