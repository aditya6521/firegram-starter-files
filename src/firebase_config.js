import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

 var firebaseConfig = {
    apiKey: "AIzaSyDI0ZPQZYHAtRsJ7bEZt79GdOfbYKUAYRU",
    authDomain: "photogen-ba786.firebaseapp.com",
    projectId: "photogen-ba786",
    storageBucket: "photogen-ba786.appspot.com",
    messagingSenderId: "125727714625",
    appId: "1:125727714625:web:db15d3dab7b20ae05305c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage=firebase.storage();
  const projectFirestore=firebase.firestore();

  export { projectStorage , projectFirestore};