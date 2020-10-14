import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAKd2ziboHcXLHP3kXLSDjYrDXS3904HVI",
    authDomain: "twitter-clone-68d21.firebaseapp.com",
    databaseURL: "https://twitter-clone-68d21.firebaseio.com",
    projectId: "twitter-clone-68d21",
    storageBucket: "twitter-clone-68d21.appspot.com",
    messagingSenderId: "109144316431",
    appId: "1:109144316431:web:bd25f78f8ce748723fe17a",
    measurementId: "G-V7MJDLTYGJ"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;