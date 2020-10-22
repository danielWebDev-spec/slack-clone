import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQZX0wWUGPpb07Eudwn_GTWzSPwUki--g",
  authDomain: "slack-clone-8c8c2.firebaseapp.com",
  databaseURL: "https://slack-clone-8c8c2.firebaseio.com",
  projectId: "slack-clone-8c8c2",
  storageBucket: "slack-clone-8c8c2.appspot.com",
  messagingSenderId: "874518749601",
  appId: "1:874518749601:web:28eac8a35ffc05daadebe0",
  measurementId: "G-D766M32K9B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
