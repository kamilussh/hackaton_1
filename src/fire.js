import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_rydykWRpBOWT8Q7cdJkU6lBJHgH6IJc",
  authDomain: "online-store-97689.firebaseapp.com",
  projectId: "online-store-97689",
  storageBucket: "online-store-97689.appspot.com",
  messagingSenderId: "731748122049",
  appId: "1:731748122049:web:440f07c6ad7b6c4aa0c340",
  measurementId: "G-NZBBM106H5",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
