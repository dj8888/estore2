// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAt1qQd5OUQh1qZCh0f944vxIjxPOS211o",
    authDomain: "estore-8707a.firebaseapp.com",
    databaseURL: "https://estore-8707a.firebaseio.com",
    projectId: "estore-8707a",
    storageBucket: "estore-8707a.appspot.com",
    messagingSenderId: "593247930334",
    appId: "1:593247930334:web:efd4388f5f751e7884ff4f",
    measurementId: "G-5MVJ40FZEF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ db, auth};