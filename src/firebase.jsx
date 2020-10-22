import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAQN1NDL_4VCwQomzH167UmuabTiVI5OUg",
  authDomain: "react-clone-instagram-7aaea.firebaseapp.com",
  databaseURL: "https://react-clone-instagram-7aaea.firebaseio.com",
  projectId: "react-clone-instagram-7aaea",
  storageBucket: "react-clone-instagram-7aaea.appspot.com",
  messagingSenderId: "716154581017",
  appId: "1:716154581017:web:90713ef8c03ae160433a88",
  measurementId: "G-QMY6GXVY9E"
};

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };