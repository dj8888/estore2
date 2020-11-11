// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyByld8mwr-AXU9g-4Jm-Nt1DCBeoJWQc4U",
  authDomain: "dyson-4a3bd.firebaseapp.com",
  databaseURL: "https://dyson-4a3bd.firebaseio.com",
  projectId: "dyson-4a3bd",
  storageBucket: "dyson-4a3bd.appspot.com",
  messagingSenderId: "136347244640",
  appId: "1:136347244640:web:5b76f72f710b8f15dfcb05",
  measurementId: "G-DMZBY99ZFM"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ db, auth};