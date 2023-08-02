import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPygpjri2PWoB2TONCTpRKo2IKuQ2j628",
  authDomain: "clone-420f3.firebaseapp.com",
  projectId: "clone-420f3",
  storageBucket: "clone-420f3.appspot.com",
  messagingSenderId: "872270098485",
  appId: "1:872270098485:web:3d322e7fd80d578a50c17c",
  measurementId: "G-CZ9RW3NTZF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};